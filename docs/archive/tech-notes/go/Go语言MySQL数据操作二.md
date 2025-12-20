---
title: 【Go语言基础】Go语言 & MySQL数据库 —— 数据操作 & Context
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

## Go原生MySQL操作指南（Context版本）
​
**Go 语言操作 Mysql 的理解​**：

- `Go`语言原生操作`MySQL`时强烈推荐使用带`Context`的方法，以便实现超时控制、取消操作等关键特性
- 所有数据库操作应传入`context.Context`参数，实现并发控制和资源管理

---

### 1. 核心方法使用场景对照表

|操作类型	  | 推荐方法	         |返回值	  |  使用场景	             | Context优点|
|:---------|:---------|:---------|:---------|:---------|
|数据库DDL	  | ​ExecContext()​​	 | sql.Result|	创建/删除数据库	         | 超时控制，避免长时间阻塞|
|表结构DDL	  | ​ExecContext()​​	 | sql.Result|	建表/删表/列操作/索引操作|    确保资源释放|
|写操作	​     | ExecContext()​​	     | sql.Result|	INSERT/UPDATE/DELETE	 | 事务级超时控制|
|单行查询	  | ​QueryRowContext()​​|*sql.Row	  |  获取单条记录（如按ID查询|	    防止慢查询阻塞主流程|
|多行查询	  | ​QueryContext()​​	 | *sql.Rows|	获取多条记录（如列表查询|	    支持取消遍历大结果集|
|预处理语句	  | ​PrepareContext()​​	 | *sql.Stmt|	高频重复SQL操作	         | 复用连接时安全中止|
|事务操作	  | ​BeginTx()​​	     | *sql.Tx	  |  多操作原子执行	         | 精细化事务生命周期管理|

---

### 2. 数据库操作（DDL）

#### 2.1 数据库：增/删/切换

```go
// 创建带超时控制的数据库操作
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel() // 确保资源释放

_, err := db.ExecContext(ctx, 
    "CREATE DATABASE IF NOT EXISTS shop DEFAULT CHARSET utf8mb4")
if err != nil {
    log.Fatal("数据库创建超时或失败:", err)
}

// 删除数据库（带Context）
_, err = db.ExecContext(ctx, "DROP DATABASE IF EXISTS shop_old")

// 切换数据库
_, err = db.ExecContext(ctx, "USE shop")
```

---

#### 2.2 表操作：增/删/改/索引

```go
// 创建表带3秒超时
ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
defer cancel()

_, err := db.ExecContext(ctx, `CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB`)

// 修改表结构（Context安全）
_, err = db.ExecContext(ctx, "ALTER TABLE products ADD COLUMN stock INT DEFAULT 0")

// 带取消机制的索引创建
indexCtx, indexCancel := context.WithCancel(context.Background())
go func() {
    time.Sleep(2*time.Second)
    indexCancel() // 可以外部取消操作
}()
_, err = db.ExecContext(indexCtx, "CREATE INDEX idx_product_name ON products (name)")
```

---

### 3. 数据操作（DML）

#### 3.1 写操作

```go
ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
defer cancel()

// 插入数据（带Context）
result, err := db.ExecContext(ctx,
    "INSERT INTO products (name, price) VALUES (?, ?)",
    "Go语言教程", 88.88
)
if errors.Is(err, context.DeadlineExceeded) {
    log.Println("插入操作超时中止")
}

// 带Context的更新操作
updateCtx, updateCancel := context.WithTimeout(context.Background(), 1*time.Second)
defer updateCancel()

result, err = db.ExecContext(updateCtx,
    "UPDATE products SET price = ? WHERE id = ?",
    99.99, 100
)

// 如果超时则执行备用方案
if err != nil {
    handleTimeoutUpdate()
}
```

---

#### 3.2 读操作

```go
// 查询超时控制（3秒）
ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
defer cancel()

// 单行查询（Context安全）
var name string
var price float64
err := db.QueryRowContext(ctx, `
    SELECT name, price FROM products WHERE id = ?
`, 100).Scan(&name, &price)
if errors.Is(err, context.DeadlineExceeded) {
    log.Println("单行查询超时")
}

// 多行查询带Context
rows, err := db.QueryContext(ctx, `
    SELECT id, name, price FROM products WHERE price > ? 
`, 50.0)
defer rows.Close() // 必须关闭结果集

for rows.Next() {
    // ... 同前 ...
    if ctx.Err() != nil { // 检查上下文状态
        break // 提前终止遍历
    }
}
```

---

#### 3.3 预处理语句

```go
// 带超时的预处理
ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
defer cancel()

stmt, err := db.PrepareContext(ctx, 
    "INSERT INTO products (name, price) VALUES (?, ?)"
)
if err != nil {
    log.Fatal("预处理超时或失败:", err)
}
defer stmt.Close()

// 执行预处理语句也支持Context
insertCtx, insertCancel := context.WithTimeout(context.Background(), 1*time.Second)
defer insertCancel()
_, err = stmt.ExecContext(insertCtx, "机械键盘", 299.0)
```

---

#### 3.4 事务处理强化

```go
// 事务带7秒全局超时
ctx, cancel := context.WithTimeout(context.Background(), 7*time.Second)
defer cancel()

// 创建事务（使用Context）
tx, err := db.BeginTx(ctx, nil)
if err != nil {
    log.Fatal("事务启动失败:", err)
}

// 事务内操作使用同一个Context
_, err = tx.ExecContext(ctx, 
    "UPDATE accounts SET balance = balance - ? WHERE id = ?", 
    100.0, 1
)

_, err = tx.ExecContext(ctx,
    "UPDATE accounts SET balance = balance + ? WHERE id = ?",
    100.0, 2
)

if err != nil {
    if rollbackErr := tx.Rollback(); rollbackErr != nil {
        log.Fatal("回滚失败:", rollbackErr)
    }
    return
}

// 提交也支持Context
if err = tx.Commit(); err != nil {
    log.Fatal("提交失败:", err)
}
```

---

### 4. Context 使用最佳实践

#### 4.1 Context传值规范

```go
// 推荐：从HTTP请求传递Context
func handler(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()
    
    // 传递到数据层
    products, err := GetProducts(ctx)
    // ...
}

// 链路超时控制（总超时5秒，DB操作最多3秒）
func businessProcess() {
    parentCtx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()
    
    dbCtx, dbCancel := context.WithTimeout(parentCtx, 3*time.Second)
    defer dbCancel()
    
    result, err := db.ExecContext(dbCtx, ...)
}
```

---

#### 4.2 Context错误处理

```go
if err != nil {
    switch {
    case errors.Is(err, context.DeadlineExceeded):
        // 超时处理
    case errors.Is(err, context.Canceled):
        // 取消处理
    default:
        // 其他错误
    }
}
```

---

### 5. 完整操作路程图



---