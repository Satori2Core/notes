---
title: 【Go语言基础】Go语言 & MySQL数据库 —— SQLx 库：使用指南
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

## 安装与初始化

### 1. 安装依赖

```bash
go get github.com/jmoiron/sqlx

# go 操作 mysql 驱动
go get github.com/go-sql-driver/mysql
```

---

### 2. 初始化数据库连接

- **关键方法**：`sqlx.Open("mysql", dsn)`

```go

```

---