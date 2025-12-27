---
title: Prometheus 监控系统简单部署与配置指南
date: '2025-12-27'
categories:
 - 后端技术
tags:
 - Prometheus
 - 监控
 - 运维
 - 部署
publish: true
---

<LastUpdated />

# Prometheus 监控系统简单部署与配置指南

> 本文档记录了在 `Ubuntu` 系统上从零部署 `Prometheus` 监控系统及其关键组件（`Node Exporter`）的完整流程，包括问题排查和解决方案。

## 目录

- [一、环境准备与核心概念](#一环境准备与核心概念)
- [二、Prometheus Server 部署](#二prometheus-server-部署)
- [三、Node Exporter 部署](#三node-exporter-部署)
- [四、配置 Prometheus 抓取 Node Exporter 指标](#四配置-prometheus-抓取-node-exporter-指标)
- [五、完整验证](#五完整验证)
- [六、故障排查指南](#六故障排查指南)
- [七、后续扩展建议](#七后续扩展建议)
- [八、关键命令速查表](#八关键命令速查表)
- [九、注意事项与最佳实践](#九注意事项与最佳实践)

## 一、环境准备与核心概念

### 1.1 系统环境

| 环境 | 要求 |
|------|------|
| 操作系统 | `Ubuntu`（适用于大多数Linux发行版） |
| 依赖 | 已安装 `Go` 语言环境 |
| 网络 | 能访问 `GitHub` 等资源站 |

### 1.2 核心组件

| 组件 | 作用 | 默认端口 |
|------|------|----------|
| Prometheus Server | 监控系统主程序，负责指标的抓取、存储、查询和告警 | 9090 |
| Node Exporter | 收集主机硬件和操作系统指标（CPU、内存、磁盘等） | 9100 |
| promtool | Prometheus 配套工具，用于检查配置和规则文件 | - |

### 1.3 安全原则

- **最小权限原则**：为每个服务创建专用系统用户，限制其权限
- **资源隔离**：配置文件、数据文件、二进制文件分离存放，便于管理

## 二、Prometheus Server 部署

### 2.1 下载与解压

```bash
# 进入下载目录（示例）
cd ~/Desktop/download

# 解压安装包（以 prometheus-2.45.0.linux-amd64.tar.gz 为例）
tar -xzf prometheus-2.45.0.linux-amd64.tar.gz

# 移动至系统目录
sudo mv prometheus-2.45.0.linux-amd64 /usr/local/prometheus
```

> **注意**：若解压时出现 "unexpected end of file" 错误，表明压缩包损坏或不完整，需重新下载。

### 2.2 创建专用用户和目录

```bash
# 创建专用系统用户（无法登录）
sudo useradd --no-create-home --shell /bin/false prometheus

# 创建配置目录和数据目录
sudo mkdir -p /etc/prometheus /var/lib/prometheus

# 设置目录所有者
sudo chown -R prometheus:prometheus /etc/prometheus /var/lib/prometheus
```

> **安全原理**：使用专用用户运行服务，即使服务被攻击，攻击者也仅拥有该用户的有限权限，无法危及整个系统。

### 2.3 复制核心文件

```bash
# 进入解压目录
cd /usr/local/prometheus

# 复制二进制文件到系统路径
sudo cp prometheus promtool /usr/local/bin/

# 复制配置文件
sudo cp prometheus.yml /etc/prometheus/

# 重要：检查新版本中是否已移除 consoles 和 console_libraries 目录
# 如果存在则复制，如果不存在则忽略（新版本如3.8.1已移除）
ls -la
# 若存在，则执行：
sudo cp -r consoles/ console_libraries/ /etc/prometheus/
```

### 2.4 设置文件权限

```bash
# 确保二进制文件可执行
sudo chmod a+x /usr/local/bin/prometheus /usr/local/bin/promtool

# 确保配置文件目录权限正确
sudo chown -R prometheus:prometheus /etc/prometheus
```

### 2.5 创建 Systemd 服务

创建文件 `/etc/systemd/system/prometheus.service`：

```ini
[Unit]
Description=Prometheus Time Series Collection and Processing Server
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
    --config.file=/etc/prometheus/prometheus.yml \
    --storage.tsdb.path=/var/lib/prometheus/
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

> **关键点**：Prometheus 新版本（3.x）已移除内置控制台模板，因此启动参数中无需指定 `--web.console.templates` 和 `--web.console.libraries`。

### 2.6 启动与验证

```bash
# 重新加载 systemd 配置
sudo systemctl daemon-reload

# 启动服务
sudo systemctl start prometheus

# 设置开机自启
sudo systemctl enable prometheus

# 检查服务状态
sudo systemctl status prometheus

# 验证端口监听
sudo netstat -tunlp | grep 9090

# 测试获取指标（命令行）
curl http://localhost:9090/metrics
```

### 2.7 访问 Web 界面

浏览器访问：`http://<服务器IP地址>:9090`

## 三、Node Exporter 部署

### 3.1 下载与解压

```bash
# 进入下载目录
cd ~/Desktop/download

# 解压 Node Exporter
tar -xzf node_exporter-1.10.2.linux-amd64.tar.gz

# 复制二进制文件到系统路径
sudo mv node_exporter-1.10.2.linux-amd64/node_exporter /usr/local/bin/
```

### 3.2 创建专用用户

```bash
sudo useradd --no-create-home --shell /bin/false node_exporter
sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
```

### 3.3 创建 Systemd 服务

创建文件 `/etc/systemd/system/node_exporter.service`：

```ini
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
```

### 3.4 启动与验证

```bash
# 重新加载 systemd 配置
sudo systemctl daemon-reload

# 启动服务
sudo systemctl start node_exporter

# 设置开机自启
sudo systemctl enable node_exporter

# 检查服务状态
sudo systemctl status node_exporter

# 验证端口监听
sudo netstat -tunlp | grep 9100

# 测试获取系统指标
curl http://localhost:9100/metrics
```

## 四、配置 Prometheus 抓取 Node Exporter 指标

### 4.1 编辑配置文件

```bash
sudo vim /etc/prometheus/prometheus.yml
```

### 4.2 添加抓取任务

在 `scrape_configs` 部分添加：

```yaml
scrape_configs:
  # 监控 Prometheus 自身
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  # 监控 Node Exporter（添加以下内容）
  - job_name: 'node_exporter'
    static_configs:
      - targets: ['localhost:9100']
```

> **注意**：如果 Node Exporter 运行在其他主机，需将 `localhost` 替换为相应 IP 地址。

### 4.3 检查配置文件语法

```bash
sudo -u prometheus /usr/local/bin/promtool check config /etc/prometheus/prometheus.yml
```

### 4.4 重启服务

```bash
sudo systemctl restart prometheus
sudo systemctl status prometheus
```

## 五、完整验证

### 5.1 检查服务状态

```bash
sudo systemctl status prometheus
sudo systemctl status node_exporter
```

### 5.2 验证端口监听

```bash
# Prometheus
sudo netstat -tunlp | grep 9090

# Node Exporter
sudo netstat -tunlp | grep 9100
```

### 5.3 Web 界面验证

访问 `http://<服务器IP>:9090`，进入 **Status** → **Targets**

应看到两个目标：
- `prometheus(localhost:9090)` - 状态为 **UP**
- `node_exporter(localhost:9100)` - 状态为 **UP**

### 5.4 防火墙配置（如启用）

```bash
# 开放 Prometheus 端口
sudo ufw allow 9090/tcp

# 开放 Node Exporter 端口
sudo ufw allow 9100/tcp

# 重新加载防火墙规则
sudo ufw reload
```

## 六、故障排查指南

### 6.1 常见问题

| 问题 | 检查点 | 解决方案 |
|------|--------|----------|
| 配置文件语法错误 | `promtool check config` | 修复 YAML 格式，确保缩进正确 |
| 端口被占用 | `netstat -tulnp \| grep 9090` | 终止占用进程或修改端口 |
| 权限不足 | 检查目录所有者 | `sudo chown -R prometheus:prometheus /etc/prometheus /var/lib/prometheus` |
| 服务文件路径错误 | 检查 `ExecStart` 路径 | 确保路径正确 |
| SELinux 限制 | 检查 SELinux 状态 | `sudo setenforce 0` |

### 6.2 查看日志

```bash
# 查看 Prometheus 日志
sudo journalctl -u prometheus.service -f

# 查看 Node Exporter 日志
sudo journalctl -u node_exporter.service -f
```

### 6.3 网络连通性测试

```bash
# 测试 Node Exporter 是否可达
curl -v http://localhost:9100/metrics

# 测试 Prometheus 是否可达
curl -v http://localhost:9090/metrics
```

## 七、使用 Prometheus 监控 Go 应用程序

### 7.1 监控 Go 应用程序

引入 Prometheus 客户端库：

```bash
go get github.com/prometheus/client_golang/prometheus
go get github.com/prometheus/client_golang/prometheus/promhttp
```

暴露指标端点：

```go
http.Handle("/metrics", promhttp.Handler())
http.ListenAndServe(":8080", nil)
```

在 Prometheus 配置中添加抓取任务：

```yaml
- job_name: 'go_app'
  static_configs:
    - targets: ['localhost:8080']
```

### 7.2 安装 Grafana 可视化

```bash
# 安装 Grafana
sudo apt-get install -y apt-transport-https
sudo apt-get update
sudo apt-get install grafana

# 启动服务
sudo systemctl start grafana-server
sudo systemctl enable grafana-server
```

访问 `http://<服务器IP>:3000`，默认账号/密码：`admin/admin`

### 7.3 配置告警（Alertmanager）

- 下载并安装 Alertmanager
- 配置告警规则文件
- 在 Prometheus 配置中关联 Alertmanager

## 八、关键命令速查表

| 用途 | 命令 |
|------|------|
| 检查配置语法 | `sudo -u prometheus promtool check config /etc/prometheus/prometheus.yml` |
| 查看服务状态 | `sudo systemctl status prometheus` |
| 查看服务日志 | `sudo journalctl -u prometheus.service -f` |
| 重启服务 | `sudo systemctl restart prometheus` |
| 验证指标端点 | `curl http://localhost:9090/metrics` |
| 检查端口占用 | `sudo netstat -tulnp \| grep 9090` |
| 设置文件权限 | `sudo chown -R prometheus:prometheus /etc/prometheus` |

## 九、注意事项与最佳实践

- **版本选择**：生产环境建议使用稳定版而非最新版
- **数据持久化**：确保数据目录 `/var/lib/prometheus` 有足够空间，并定期备份
- **监控自身**：监控 Prometheus 自身性能，避免监控系统成为瓶颈
- **安全加固**：不要以 root 用户运行 Prometheus；配置适当的防火墙规则；定期更新
- **配置管理**：将配置文件纳入版本控制（如 Git），便于追踪变更和回滚
- **资源限制**：为 Prometheus 服务设置适当的系统资源限制（CPU、内存）
