---
title: 【项目开发】团队开发的基石 —— Git分支管理：从基础到实战（创建、切换、合并[冲突]、挑合）
date: '2025-6-7'
sidebar: 'auto'
categories:
 - Git
tags:
 - 项目
 - Git
 - 环境搭建
publish: true
sticky: 6
lastUpdated: '2025/6/9 21:00:00'
---

> 我的随笔录：[Satori2Core 随笔录 —— 更新计划 / 笔录目录](https://satori2core.github.io/notes/noteroot/about/%E5%85%B3%E4%BA%8E%E6%9B%B4%E6%96%B0%E8%AE%A1%E5%88%92.html)


---

## 0. 前言

前面的文章简单介绍了`Git`本地环境配置和`Git`第一次提交的基本操作，本文将以分享关于`Git`分支管理内容。

分支（Branch）是 Git 最核心的功能之一，它允许开发者在独立的“时间线”上开发新功能、修复 bug 或实验新想法，而不会影响主分支（如 main）的稳定性。

论是个人项目还是团队协作，合理的分支管理都能大幅提升代码质量和开发效率。

本文将以 ​​“GitLearnLab” 项目​ 为例，结合实际开发场景（如新增功能、修复紧急 bug），详细讲解分支的创建、切换、合并、挑合（Cherry-pick）​​ 等核心操作，并总结最佳实践。

---

## 1. 为什么需要分支？

想象一个场景：你正在开发一个新功能（如“用户登录”），但主分支（main）需要保持稳定（可能明天就要发布版本）。

如果直接在 main 分支写代码：

- 一旦新功能未完成，main 分支会被“污染”（包含未完成功能的代码）
- 若此时需要紧急修复线上 bug，无法直接在 main 分支提交（会打断新功能开发）

​**分支的价值​**：

- **隔离开发**：新功能、bug 修复、实验性代码互不干扰
- **保护主分支**：主分支始终是“可发布状态”（仅包含经过测试的稳定代码）
- **灵活协作**：团队成员可在各自分支开发，完成后合并到主分支

---

## 2. 分支的基础操作 —— 创建与切换

### 2.1 查看当前分支

在 Git 中，每个仓库默认有一个 main（或 master，取决于初始化配置）分支。执行以下命令查看当前所在分支：

```bash
# 末尾带 * 号的是当前分支
git branch  

# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(master) git branch  
* master    # 本地只有一个分支，当前在master分支
➜  GitLearnLab git:(master) 

# 示例：end -------------------------------------------------------------------
```

---

### 2.2 创建新分支

开发新功能或修复 bug 时，需要从当前分支（如 master）创建一个新分支。例如，我们要开发“用户登录”功能，创建 feature/login 分支：

> 注： 基于 X 分支，新建 Y 分支，年则 Y 的内容和 X 完全相同（包含历史提交记录）。

```bash
# -b 表示“创建并切换”到新分支
git checkout -b feature/login  

# 如上命令等价于两条命令
git branch feature/login   # 先创建分支
git checkout feature/login # 再切换到该分支

# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(master) git branch feature/login
➜  GitLearnLab git:(master) git checkout feature/login 
切换到分支 'feature/login'
➜  GitLearnLab git:(feature/login) git branch
* feature/login     # 当前处于新建的分支
  master
➜  GitLearnLab git:(feature/login) 
# 示例：end -------------------------------------------------------------------
```

---

### 2.3 切换分支

从当前分支切换到其他分支（如从 feature/login 切回 master）：

```bash
# 切换到 master 分支
git checkout master  

# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(feature/login) git checkout master
切换到分支 'master'
您的分支与上游分支 'origin/master' 一致。
➜  GitLearnLab git:(master) 
# 示例：end -------------------------------------------------------------------
```

---

### 2.4 查看所有分支

查看本地所有分支（包括已删除但未清理的）：

```bash
# -a 表示“all”，显示本地和远程分支
git branch -a  

# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(master) git branch -a
  feature/login
* master
  remotes/origin/master
➜  GitLearnLab git:(master) 
# 示例：end -------------------------------------------------------------------
```

---

### 2.5 删除分支

当分支开发完成（如新功能已合并到主分支），可删除本地分支：

**注**：
- -d 表示“安全删除”（分支已合并时才允许删除）
- -D 表示“强制删除”（分支没有合并也删除）

```bash
# -d 表示“安全删除”（分支已合并时才允许删除）
git branch -d feature/login  

# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(master) git branch -d feature/login 
已删除分支 feature/login（曾为 09a29dc）。
➜  GitLearnLab git:(master) git branch -a
* master
  remotes/origin/master
  # 前文创建的 feature/login 分支已删除
➜  GitLearnLab git:(master) 
# 示例：end -------------------------------------------------------------------
```

---

## 3. 分支合并：将分支代码整合到主分支

开发完“用户登录”功能后，需要将 feature/login 分支的代码合并到 main 分支，让主分支包含新功能。

### 3.1 合并前的准备（重要！！！）

- **确保主分支（master）是最新的**（可能他人已推送新代码）。【使用 git pull命令】
- 合并操作是在被合并目标分支上，将其他名分支合并到所在分支。


```bash
git checkout master          # 切换到 master 分支
git pull origin master       # 拉取远程 master 分支的最新代码（若关联了远程）

# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(master) git checkout -b feature/login
切换到一个新分支 'feature/login'
➜  GitLearnLab git:(feature/login) git branch -a
* feature/login
  master
  remotes/origin/master
➜  GitLearnLab git:(feature/login) git checkout master
切换到分支 'master'
您的分支与上游分支 'origin/master' 一致。
➜  GitLearnLab git:(master) git pull origin master
来自 github.com:Satori2Core/GitLearnLab
 * branch            master     -> FETCH_HEAD
已经是最新的。  # 此处由于远端主分支没有任何操作，所以这里没有拉取内容的信息。
➜  GitLearnLab git:(master)   
# 示例：end -------------------------------------------------------------------
```

---

### 3.2 执行合并

切换到目标分支（master），并合并源分支（feature/login）：

```bash
# 将 feature/login 合并到当前分支（master）
git merge feature/login  

# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(feature/login) git branch -a
* feature/login     # 工作分支
  master
  remotes/origin/master
➜  GitLearnLab git:(feature/login) git status  # 看看工作区状态
位于分支 feature/login
无文件要提交，干净的工作区
➜  GitLearnLab git:(feature/login) echo "# test merge branch" > merge.md   # 模拟开发修改
➜  GitLearnLab git:(feature/login) ✗ git status # 看到有修改
位于分支 feature/login
未跟踪的文件:
  （使用 "git add <文件>..." 以包含要提交的内容）
	merge.md

提交为空，但是存在尚未跟踪的文件（使用 "git add" 建立跟踪）
➜  GitLearnLab git:(feature/login) ✗ git add .    
➜  GitLearnLab git:(feature/login) ✗ git commit -m "test: git merge" 
[feature/login 6243251] test: git merge
 1 file changed, 1 insertion(+)
 create mode 100644 merge.md
➜  GitLearnLab git:(feature/login) git push --set-upstream origin feature/login    # 远程没有，第一次推送的指令（后续使用 git push 即可）
# 省略输出的提示内容...

➜  GitLearnLab git:(feature/login) git checkout master # 切换到主分支
切换到分支 'master'
您的分支与上游分支 'origin/master' 一致。
➜  GitLearnLab git:(master) ll       # 这里可以看见没有前面在 feature/login 分支新建的文档 merge.md 
总计 4.0K
-rw-rw-r-- 1 devuser devuser 27  6月 10 22:03 README.md
➜  GitLearnLab git:(master) git merge feature/login    # 执行合并
更新 09a29dc..6243251
Fast-forward
 merge.md | 1 +
 1 file changed, 1 insertion(+)
 create mode 100644 merge.md
➜  GitLearnLab git:(master) ll     
总计 8.0K
-rw-r--r-- 1 devuser devuser 20  6月 16 22:27 merge.md  # 这里出现了 merge.md，即合并完成 
-rw-rw-r-- 1 devuser devuser 27  6月 10 22:03 README.md
➜  GitLearnLab git:(master) 
# 示例：end -------------------------------------------------------------------
```
> 看看效果？

![gitmerge](./gitmerge.png)

---

### 3.3 合并冲突（Merge Conflict）​

刚刚的操作是最理想的情形，我们没有出现**合并冲突**。

**【什么是合并冲突？】**

- 如果两个分支**修改了同一文件的同一部分**，Git 无法自动判断保留哪个版本，会触发**合并冲突**。此时需要手动解决冲突。

---

**【冲突模拟准备】**

- 这里准备了两个分支 test/conflict_A 和 test/conflict_B。
- 分别写入如下内容【内容有区别】

```bash
# test/conflict_A 的 conflict.md 文档
test conflict A
```

```bash
# test/conflict_B 的 conflict.md 文档
test conflict B
```

---

**【执行合并触发冲突】**

```bash
➜  GitLearnLab git:(master) git branch
  feature/login
* master
  test/conflict_A   # 测试分支 A
  test/conflict_B   # 测试分支 B
➜  GitLearnLab git:(master) git checkout test/conflict_A
切换到分支 'test/conflict_A'
您的分支与上游分支 'origin/test/conflict_A' 一致。
➜  GitLearnLab git:(test/conflict_A) git merge test/conflict_B 
自动合并 conflict.md
冲突（添加/添加）：合并冲突于 conflict.md
自动合并失败，修正冲突然后提交修正的结果。  # 看提示：冲突了！！！
➜  GitLearnLab git:(test/conflict_A) ✗
```

---

### 3.4 冲突解决步骤

如上我们已经触发了冲突，现在需要解决冲突。

- 第一步：打开冲突文件，查看标记（<<<<<<<, =======, >>>>>>>）

```bash
➜  GitLearnLab git:(test/conflict_A) ✗ vim conflict.md
```
- 内容如下

![testconflict](./testconflict.png)

- 第二步：手动选择保留哪部分代码（或合并两者），删除冲突标记：
> 直白的说就是修改文件内容，修改后的内容作为最终内容结果。

![fixconflict](./fixconflict.png)

- 第三步：提交结果

> 我们去github瞅瞅

![fixconflictresult](./fixconflictresult.png)

---


## 4. 挑合（Cherry-pick）：选择特定提交合并

### 4.1 挑合是什么？

挑合（Cherry-pick）​​ 是 Git 中的一种**选择性合并**操作，它允许你将**某个分支上的特定提交（一个或多个）**​“摘取”出来，应用到当前分支上。与 merge（合并整个分支）或 rebase（转移整个分支）不同，​cherry-pick **精确选择需要的提交**，而非处理整个分支历史。

**关键理解**：
- **针对性**​：只复制选定的提交（通过 commit hash 指定）。
- **独立性**​：在目标分支上**生成新的提交**​（内容与原提交相同，但 Hash 值不同）。
- **场景驱动​**：适用于“仅需某个功能/修复，而非整个分支”的情况。

---

### 4.2 挑合的基本操作

假设 test/cherry_pick_A 分支有三个提交：

```bash
C1（初始化登录接口） → C2（添加表单验证） → C3（修复登录超时问题）
```

现在需要将 C2（添加表单验证）合并到 test/cherry_pick_B 分支，可使用 cherry-pick：

**【步骤1：找到目标提交的哈希值】**

```bash
git log --oneline  # 简洁模式显示提交哈希和信息
```

**【步骤2：切换到目标分支（master）并挑合】**

```bash
git checkout main          # 切换到 main 分支
git cherry-pick abc1234    # 将提交 abc1234 合并到 main
```

---

### 4.3 操作示例

**cherry_pick_A 准备：提交准备**

```bash
# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(master) git branch
  feature/login
* master
  test/conflict_A
  test/conflict_B
➜  GitLearnLab git:(master) git checkout -b test/cherry_pick_A   
切换到一个新分支 'test/cherry_pick_A'
➜  GitLearnLab git:(test/cherry_pick_A) vim test.md
➜  GitLearnLab git:(test/cherry_pick_A) ✗ git add .
➜  GitLearnLab git:(test/cherry_pick_A) ✗ git commit -m "初始化登录接口" # 第一次提交
[test/cherry_pick_A f7d191d] 初始化登录接口
 1 file changed, 1 insertion(+)
 create mode 100644 test.md
➜  GitLearnLab git:(test/cherry_pick_A) vim test.md 
➜  GitLearnLab git:(test/cherry_pick_A) ✗ git add .
➜  GitLearnLab git:(test/cherry_pick_A) ✗ git commit -m "添加表单验证" # 第二次提交
[test/cherry_pick_A 455995c] 添加表单验证
 1 file changed, 2 insertions(+)
➜  GitLearnLab git:(test/cherry_pick_A) vim test.md                 
➜  GitLearnLab git:(test/cherry_pick_A) ✗ git add .                   
➜  GitLearnLab git:(test/cherry_pick_A) ✗ git commit -m "修复登录超时问题" # 第三次提交
[test/cherry_pick_A d1a9dc6] 修复登录超时问题
 1 file changed, 2 insertions(+)
➜  GitLearnLab git:(test/cherry_pick_A) git log --oneline
d1a9dc6 (HEAD -> test/cherry_pick_A) 修复登录超时问题
455995c 添加表单验证
f7d191d 初始化登录接口
6243251 (origin/master, origin/feature/login, master, feature/login) test: git merge
09a29dc feat: 初始化项目，添加主程序及.gitignore配置
# 示例：end -------------------------------------------------------------------
```

---

**cherry_pick_B 挑合**

- 指定挑合`cherry_pick_B`的第二次提交（455995c）：添加表单验证

```bash
# 示例：start -----------------------------------------------------------------
➜  GitLearnLab git:(master) git checkout -b test/cherry_pick_B
切换到一个新分支 'test/cherry_pick_B'
➜  GitLearnLab git:(test/cherry_pick_B) ll  
总计 8.0K
-rw-r--r-- 1 devuser devuser 20  6月 16 22:27 merge.md
-rw-rw-r-- 1 devuser devuser 27  6月 10 22:03 README.md
➜  GitLearnLab git:(test/cherry_pick_B) git cherry-pick 455995c           
冲突（修改/删除）：test.md 在 HEAD 中被删除，在 455995c (添加表单验证) 中被修改。test.md 的 455995c (添加表单验证) 版本在树中被保留。
error: 不能应用 455995c... 添加表单验证
提示：解决所有冲突之后，用 "git add/rm <路径规格>" 标记它们，
提示：然后执行 "git cherry-pick --continue"。您也可以执行
提示："git cherry-pick --skip" 命令跳过这个提交。如果想要终止执行并回到
提示：执行 "git cherry-pick" 之前的状态，执行 "git cherry-pick --abort"。
➜  GitLearnLab git:(test/cherry_pick_B) ✗ git checkout --theirs -- test.md
➜  GitLearnLab git:(test/cherry_pick_B) ✗ git add test.md
➜  GitLearnLab git:(test/cherry_pick_B) ✗ git cherry-pick --continue
[test/cherry_pick_B be74b9a] 添加表单验证
 Date: Fri Jun 20 21:56:14 2025 +0800
 1 file changed, 3 insertions(+)
 create mode 100644 test.md
➜  GitLearnLab git:(test/cherry_pick_B) git log --oneline
be74b9a (HEAD -> test/cherry_pick_B) 添加表单验证
6243251 (origin/master, origin/feature/login, master, feature/login) test: git merge
09a29dc feat: 初始化项目，添加主程序及.gitignore配置
➜  GitLearnLab git:(test/cherry_pick_B) 
# 示例：end -------------------------------------------------------------------
```

---


### 4.4 补充说明

如 4.3 中，可以发现我在`cherry_pick_B`上执行操作时，有冲突报错！

```bash
➜  GitLearnLab git:(test/cherry_pick_B) git cherry-pick 455995c           
冲突（修改/删除）：test.md 在 HEAD 中被删除，在 455995c (添加表单验证) 中被修改。test.md 的 455995c (添加表单验证) 版本在树中被保留。
error: 不能应用 455995c... 添加表单验证
提示：解决所有冲突之后，用 "git add/rm <路径规格>" 标记它们，
提示：然后执行 "git cherry-pick --continue"。您也可以执行
提示："git cherry-pick --skip" 命令跳过这个提交。如果想要终止执行并回到
提示：执行 "git cherry-pick" 之前的状态，执行 "git cherry-pick --abort"。
```

---

**【为什么会出现会冲突？】**

在我的案例中：
- 源分支​：test/cherry_pick_A
- ​目标分支​：test/cherry_pick_B
- ​操作​：将 455995c 的变更应用到 test/cherry_pick_B
- ​结果​：在 test/cherry_pick_B 创建新提交，包含：
  - 添加表单验证的代码
  - 创建 test.md 文件

技术实现上有个关键点：
- 当 cherry-pick ​创建新文件的提交时
- 如果目标分支不存在该文件​
- Git 会视为"修改/删除"冲突（技术上：修改一个不存在的文件）

注：两个分支都是基于`master`建立的，但是`test.md`文件是主分支没有的！所以在挑合时，把`cherry_pick_A`的上新建的`test.md`操作挑合过来，即触发了：Git 会视为"修改/删除"冲突（技术上：修改一个不存在的文件）。

---

实际，如上情形：不影响操作本质​：

你通过 git checkout --theirs 明确告诉 Git："我接受源提交的变更，请创建这个新文件"
这正是 cherry-pick 的标准解决流程

---

也就是说，如果遇到这个问题，执行以下命令就行继续挑合即可。

```bash
git checkout --theirs -- test.md  # 恢复冲突文件
git add test.md                    # 标记冲突已解决
git cherry-pick --continue         # 继续cherry-pick操作
```

---

### 4.5 注意事项​
- **​提交哈希的唯一性**​：即使提交来自不同分支，Git 也会根据内容生成唯一哈希，因此 cherry-pick 可跨分支使用。
- ​**冲突处理**​：若挑合的提交与目标分支有冲突，需手动解决后提交（类似合并冲突）。
- ​**顺序问题**​：cherry-pick 按提交顺序执行，若挑合多个提交需注意依赖关系（如先挑合 C2 再挑合 C3）。

---


## 5. 本文 Git 分支管理指令总结

| 指令名称 | 命令格式 | 描述说明 |
|----------|----------|----------|
| **查看当前分支** | `git branch` | 显示本地分支列表，带 `*` 号表示当前所在分支 |
| **创建新分支** | `git branch <branch_name>` | 基于当前分支创建新分支（不切换） |
| **切换分支** | `git checkout <branch_name>` | 切换到指定分支 |
| **创建并切换分支** | `git checkout -b <branch_name>` | 创建新分支并立即切换到该分支 |
| **查看所有分支** | `git branch -a` | 显示本地和远程所有分支 |
| **删除分支（安全）** | `git branch -d <branch_name>` | 仅在分支已合并时允许删除 |
| **删除分支（强制）** | `git branch -D <branch_name>` | 强制删除未合并的分支 |
| **更新主分支** | `git pull origin <branch_name>` | 拉取远程分支最新代码（合并前准备） |
| **合并分支** | `git merge <source_branch>` | 将指定分支合并到当前分支 |
| **查看简洁提交日志** | `git log --oneline` | 单行显示提交历史和哈希值 |
| **挑合提交** | `git cherry-pick <commit_hash>` | 将指定提交应用到当前分支 |
| **解决挑合冲突后继续** | `git cherry-pick --continue` | 解决冲突后继续挑合操作 |
| **终止挑合操作** | `git cherry-pick --abort` | 取消挑合并回到操作前状态 |
| **接受源分支变更** | `git checkout --theirs -- <file>` | 解决冲突时完全采用源分支文件内容 |
| **标记冲突已解决** | `git add <file>` | 解决冲突后将文件标记为已解决 |

---