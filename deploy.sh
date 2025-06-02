#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 安装项目依赖（关键修复）
echo "正在安装项目依赖..."
npm install --legacy-peer-deps

# 生成静态文件
echo "正在构建网站..."
npm run build

# 进入生成的文件夹
echo "进入构建目录..."
cd docs/.vuepress/dist

# 初始化Git仓库
echo "初始化Git仓库..."
git init
git config user.email "mortal_scode@163.com"
git config user.name "Satori2Core"
git add -A
git commit -m '自动部署'

# 部署到GitHub Pages
echo "正在推送到gh-pages分支..."
git push -f git@github.com:Satori2Core/notes.git master:gh-pages

echo "部署成功！访问 https://satori2core.github.io/notes/"