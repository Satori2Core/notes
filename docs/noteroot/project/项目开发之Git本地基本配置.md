---
title: 【项目开发】Git基本操作 —— 本地基本配置指南
date: '2025-6-15'
sidebar: 'auto'
categories:
 - Git
tags:
 - 项目
 - Git
 - 环境搭建
publish: true
lastUpdated: '2025/6/9 21:00:00'
---


## 0. 前言

你是否曾在第一次提交代码时被 Git 无情拒绝并提示 “Please tell me who you are”？

是否厌倦了每次推送代码都要反复输入账号密码？

是否为团队成员乱糟糟的提交者和烦人的跨平台文件假修改而头疼？

别担心，这些问题都源于 Git 配置的细节！这份指南专为解决这些痛点而写。

本文将一步步拆解 Git 的关键配置​：从首次使用必须设置的身份信息，到一劳永逸提升连接效率的 SSH 密钥配置，再到保障团队协作顺畅的换行符处理、别名设置等高级技巧。

无论你是 Git 新手、寻求规范化流程的团队贡献者，还是负责部署维护的 DevOps，本文提供的场景化配置解决方案和最佳实践，都能帮你搭建一个稳定、高效、省心的 Git 工作环境。一次配置，长期受益！💪

---


## 1. 配置用户身份 (首次使用 Git 必做)

### 1.1 什么时候会需要配置身份？

**场景说明​**：
- 首次提交时报错"Please tell me who you are"（比如，你在新的环境/新下载`Git`中第一次提交）
- 团队协作时其他人不知道谁提交的代码
- 关联代码平台账号（`GitHub`/`GitLab`）时身份不一致
- 未配置时部分 `Git` 操作会被拒绝执行

### 1.2 配置指令/操作

```bash
# 设置全局用户名（所有项目生效）
git config --global user.name "你的名字"

# 设置全局邮箱（所有项目生效）
git config --global user.email "your@email.com"

# 查看所有配置项（用来看看刚刚的设置是否成功）
git config --list
```
![git用户配置](./gituserconfig.png)

> 注​：如需为特定项目设置不同身份，去掉 --global 后在项目目录执行

---

## 2. 远程连接登录方式（核心配置）

### 2.1 SSH 密钥认证及适用场景（推荐）

**【设置方式】**
```bash
# 设置中会有相关提示/配置，直接回车就ok
ssh-keygen -t ed25519 -C "your@email.com"

# 复制内容到代码平台
cat ~/.ssh/id_ed25519.pub  

# 生成的密钥对默认存储在：
# 公钥：~/.ssh/id_ed25519.pub（或 ~/.ssh/id_rsa.pub）；
# 私钥：~/.ssh/id_ed25519（或 ~/.ssh/id_rsa）。

# 测试连接（SSH方式）
ssh -T git@github.com
```

![gitsshconfig](./gitsshconfig.png)

**【代码平台配置】**
> 以`Github`为例

【主页：个人】 => 【设置/setting】 => 【SSH and GPG keys】 => 【new keys】 => 【如下图】

![githubsshconfig](./githubsshconfig.png)


**【连接验证】**

![sshconntest](./sshconntest.png)

---

**【场景说明】**

- 每次推送需要频繁输入账号密码
- 自动化脚本部署时无法交互式输入
- 服务器操作等无图形界面环境
- 需要更高的安全级别（避免密码泄露）

---

### 2.2 HTTPS 凭证存储

**【设置方式】**
```bash
# Linux/macOS
git config --global credential.helper osxkeychain

# Windows
git config --global credential.helper wincred

# 清除凭证缓存（解决登录失败）
git credential-manager reject  # Windows
git credential-osxkeychain erase  # macOS
```

**【场景说明】**

- 企业代理环境禁止 SSH 连接
- 临时使用公共计算机时不便保存密钥
- 对 SSH 配置不熟悉的团队协作场景
- 多次操作时需要反复输入密码的困扰


---

## 3. 常用个性化配置

### 3.1 设置默认编辑器（如 VSCode）

> 一般IDE都有git插件

```bash
git config --global core.editor "code --wait"
```

### 3.2 设置换行符处理（跨平台协作必备）

> 这个操作是必要的！！！在公司打工吃过几次亏...

```bash
# 一般要求使用 lf，和跨平台主要差异点是换行符
git config --global core.autocrlf input  # Linux/macOS
git config --global core.autocrlf true   # Windows
```

### 3.3 创建快捷命令别名

```bash
git config --global alias.st status
git config --global alias.ci commit
git config --global alias.co checkout
git config --global alias.lg "log --oneline --graph"
```

### 3.4 启用彩色输出

```bash
git config --global color.ui auto
```

---

## 4. 重要配置文件位置
> 这里主要以`Linux`环境为例说明。


|作用域	|文件路径|
|:---|:---|
|系统级配置	|/etc/gitconfig|
|用户级配置	|~/.gitconfig (Home目录)|
|项目级配置	|项目目录/.git/config|

---

## 5. 连接测试与诊断

```bash
# 测试 SSH 连接 GitHub
ssh -T git@github.com   # 前文以有操作演示

# 测试 SSH 连接 GitLab
ssh -T git@gitlab.com

# 清除 HTTPS 缓存凭证
git credential-manager reject  # Windows
git credential-osxkeychain erase  # macOS
```


---

## 总结：配置场景匹配表

### **最佳实践建议**：

- 开发环境优先使用SSH+换行符处理
- ​临时设备使用HTTPS+短期缓存

---

### 常见匹配表

|场景	|关键配置项	|典型命令|
|:------|:------|:------|
|新电脑首次使用 Git	|用户身份设置	|git config --global user.name/email|
|跨操作系统团队协作	|换行符处理	|core.autocrlf 配置|
|自动化部署/CI/CD	|SSH密钥认证	|ssh-keygen -t ed25519|
|频繁推送/拉取代码	|HTTPS凭证缓存	|credential.helper|
|查看复杂提交历史	|日志别名设置	|git config --global alias.lg...|
|解决文件假修改问题	|LF/CRLF处理规则	|core.autocrlf input/true|
|公共电脑临时使用	|避免凭证长期存储	|git config --global credential.helper cache --timeout=300|
