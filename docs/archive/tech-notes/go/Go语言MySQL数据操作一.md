---
title: 【Go语言基础】Go语言 & MySQL数据库 —— 数据操作：无上下文 Context
date: '2025-6-7'
sidebar: 'auto'
categories:
 - Go语言基础
tags:
 - Go
 - 项目
 - 环境搭建
publish: true
lastUpdated: '2025/6/8 21:00:00'
---

---

> 我的随笔录：[Satori2Core 随笔录 —— 更新计划 / 笔录目录](https://satori2core.github.io/notes/noteroot/about/%E5%85%B3%E4%BA%8E%E6%9B%B4%E6%96%B0%E8%AE%A1%E5%88%92.html)

---

## Go原生MySQL操作指南

**Go 语言操作 Mysql 的理解**：
- `Go语言原生操作MySQL的核心就是通过 sql.DB 实例的 Exec() 等方法执行原始SQL语句`

---

### 1. 核心方法使用场景对照表

|操作类型	|推荐方法	|返回值	|使用场景|
|:--------|:--------|:--------|:--------|
|​数据库DDL​	|Exec()	|sql.Result	|创建/删除数据库|
|​表结构DDL​	|Exec()	|sql.Result	|建表/删表/列操作/索引操作|
|​写操作​	|Exec()	|sql.Result	|INSERT/UPDATE/DELETE|
|​单行查询​	|QueryRow()	|*sql.Row	|获取单条记录（如按ID查询）|
|​多行查询​	|Query()	|*sql.Rows	|获取多条记录（如列表查询）|
|​预处理语句​	|Prepare()	|*sql.Stmt	|高频重复SQL操作|
|​事务操作​	|Begin()	|*sql.Tx	|多操作原子执行|

---

### 2. 数据库操作（DDL）

- **核心方法：`Exec()`**

#### 2.1 数据库：增/删/切换

```go
// 创建数据库
_, err := db.Exec("CREATE DATABASE IF NOT EXISTS shop DEFAULT CHARSET utf8mb4")

// 删除数据库
_, err := db.Exec("DROP DATABASE IF EXISTS shop_old")

// 切换数据库
_, err := db.Exec("USE shop")
```

---

#### 2.2 表操作：增/删/改/索引

> 此处简略演示，更多使用：可以看前文【Go 操作数据表】部分

```go
// 创建表
_, err := db.Exec(`CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB`)

// 删除表
_, err := db.Exec("DROP TABLE IF EXISTS temp_products")

// 修改表结构
_, err := db.Exec("ALTER TABLE products ADD COLUMN stock INT DEFAULT 0")

// 索引操作
_, err := db.Exec("CREATE INDEX idx_product_name ON products (name)")
_, err := db.Exec("DROP INDEX idx_product_name ON products")
```

---

### 3. 数据操作（DML）

#### 3.1 写操作（INSERT/UPDATE/DELETE）

- **核心方法：`Exec()`**
- 相关方法：
	- `(sql.Result).LastInsertId()`：获取插入ID
	- `(sql.Result).RowsAffected()`：获取影响行数

```go
// 插入数据（带参数）
result, err := db.Exec(
    "INSERT INTO products (name, price) VALUES (?, ?)",
    "Go语言教程", 88.88
)

// 获取插入ID
newID, _ := result.LastInsertId()

// 更新数据
result, err := db.Exec(
    "UPDATE products SET price = ? WHERE id = ?",
    99.99, 100
)

// 获取影响行数
rowsAffected, _ := result.RowsAffected()

// 删除数据
result, err := db.Exec("DELETE FROM products WHERE id = ?", 101)
```

---


#### 3.2 读操作（SELECT）

- **核心方法：`QueryRow() / Query()`**​
- `QueryRow()`：获取单条记录（如按ID查询）
- `Query()`：获取多条记录（如列表查询），
	- 注意：多行查询，必须关闭结果集（如下示例）

```go
// 单行查询
var (
    name  string
    price float64
)
err := db.QueryRow(`
    SELECT name, price FROM products WHERE id = ?
`, 100).Scan(&name, &price)

// 多行查询
rows, err := db.Query(`
    SELECT id, name, price FROM products WHERE price > ? 
`, 50.0)
defer rows.Close() // 必须关闭结果集

for rows.Next() {
    var (
        id    int
        name  string
        price float64
    )
    if err := rows.Scan(&id, &name, &price); err != nil {
        log.Fatal(err)
    }
    fmt.Printf("%d: %s - ¥%.2f\n", id, name, price)
}

// 检查迭代错误
if err = rows.Err(); err != nil {
    log.Fatal("遍历结果出错:", err)
}
```

---


### 4. 最佳实践与安全防护

#### 4.1 SQL注入防御对照表

|方法	|安全性	|示例|
|:------|:------|:------|
|字符串拼接 1	|❌ 高风险	|"SELECT * FROM users WHERE id = " + userInput|
|字符串拼接 2	|❌ 高风险	|fmt.Sprintf("SELECT * FROM users WHERE id = %s", userInput)|
|参数化查询（？占位）	|✅ 安全	|db.Query("... WHERE id = ?", userInput)|
|预处理语句	|✅ 安全+高性能	|见下方示例|

---

#### 4.2 预处理语句使用

```go
// 准备预处理语句
stmt, err := db.Prepare("INSERT INTO products (name, price) VALUES (?, ?)")
if err != nil {
    log.Fatal(err)
}
defer stmt.Close() // 必须关闭

// 批量插入
products := []struct {
    Name  string
    Price float64
}{
    {"鼠标", 59.9},
    {"键盘", 129.0},
    {"显示器", 899.0},
}

for _, p := range products {
    _, err := stmt.Exec(p.Name, p.Price)
    if err != nil {
        log.Printf("插入失败: %v", err)
    }
}
```

---

#### 4.3 NULL值处理方案

```go
// 声明可空变量
var (
    name  sql.NullString
    price sql.NullFloat64
)

// 扫描处理
err := db.QueryRow("SELECT name, price FROM products WHERE id = 101").Scan(
    &name, &price,
)

if name.Valid {
    fmt.Println("商品名:", name.String)
} else {
    fmt.Println("商品名未设置")
}

if price.Valid {
    fmt.Printf("价格: ¥%.2f", price.Float64)
} else {
    fmt.Println("价格未设置")
}
```

---

#### 4.4 事务处理范例

- **关键方法：`Begin()`**

```go
tx, err := db.Begin()
if err != nil {
    log.Fatal(err)
}

// 异常时回滚
defer func() {
    if r := recover(); r != nil {
        tx.Rollback()
    }
}()

// 执行事务操作
_, err = tx.Exec("UPDATE accounts SET balance = balance - ? WHERE id = ?", 100.0, 1)
if err != nil {
    tx.Rollback()
    log.Fatal(err)
}

_, err = tx.Exec("UPDATE accounts SET balance = balance + ? WHERE id = ?", 100.0, 2)
if err != nil {
    tx.Rollback()
    log.Fatal(err)
}

// 提交事务
if err = tx.Commit(); err != nil {
    log.Fatal(err)
}
```

---

### 5. 完整操作流程示意




---
