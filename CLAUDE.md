# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

**个人财务管家**（Velvet Ledger）- 一款简洁优雅的个人财务管理 Web 应用。支持消费记录、预算管理、统计分析等功能。

产品需求规格详见 `001.产品PRD（产品经理）/个人财务管家PRD.md`。

## 项目结构

```
├── 001.产品PRD（产品经理）/          # 产品需求文档
│   └── 个人财务管家PRD.md
├── 002.产品UI原型（美术设计）/       # UI 原型和设计资源
│   └── UI原型/velvet_ledger/
│       └── DESIGN.md                 # 设计规范（与前端共用）
├── 003.前端代码（前端工程师）/       # 前端实现
│   └── frontend/
│       ├── README.md                 # 前端文档
│       ├── docs/DESIGN.md            # Velvet Design System 设计规范
│       └── src/
│           ├── pages/                # 页面文件
│           │   ├── login.html        # 登录
│           │   ├── register.html     # 注册
│           │   ├── home.html         # 首页（仪表盘）
│           │   ├── records.html      # 消费明细
│           │   ├── statistics.html   # 统计分析
│           │   ├── budget.html       # 预算管理
│           │   ├── profile.html      # 个人中心
│           │   └── add-expense.html  # 记一笔
│           └── styles/               # 样式文件
│               ├── base.css          # 共享基础样式
│               └── tailwind.config.js # Tailwind 配置
└── CLAUDE.md                         # 本文件
```

## 运行方式

**无需构建**，直接在浏览器中打开 HTML 文件即可预览。

```bash
# Windows - 从登录页入口
start "003.前端代码（前端工程师）/frontend/src/pages/login.html"

# 或直接进入首页
start "003.前端代码（前端工程师）/frontend/src/pages/home.html"

# macOS
open "003.前端代码（前端工程师）/frontend/src/pages/login.html"

# Linux
xdg-open "003.前端代码（前端工程师）/frontend/src/pages/login.html"
```

## 技术栈

- **前端框架**：无框架，原生 HTML5 + CSS3 + JavaScript
- **CSS 工具**：Tailwind CSS（CDN 引入）
- **图表库**：Chart.js（CDN 引入）
- **字体**：Hanken Grotesk（Google Fonts）
- **图标**：Material Symbols Outlined（Google Fonts）
- **数据存储**：浏览器 localStorage

## 设计系统：Velvet Design System

### 设计风格

**Ethereal Minimalism**（空灵极简主义）- 柔和、轻盈、质感的设计语言，通过毛玻璃效果和半透明层营造温柔的视觉体验。

### 核心色彩

| 角色 | 色值 | 用途 |
|------|------|------|
| Primary | #685a67 | 主色调，按钮、导航高亮 |
| Secondary | #75546e | 次要色，交互元素 |
| Tertiary | #78517c | 强调色，成功状态 |
| Background | #fff8f8 | 页面背景（粉白色） |
| Surface Container | #ffe8f1 | 卡片容器背景 |
| Error | #ba1a1a | 错误提示 |

完整设计规范见 `003.前端代码（前端工程师）/frontend/docs/DESIGN.md`。

### 关键 CSS 类

```css
.velvet-panel    /* 毛玻璃面板 */
.velvet-bg       /* 渐变背景 */
.soft-shadow     /* 柔和阴影 */
.btn-velvet      /* 主按钮样式 */
.input-focus-accent  /* 输入框焦点样式 */
.velvet-card     /* 卡片样式 */
.progress-track  /* 进度条轨道 */
```

## 页面导航结构

### 移动端底部导航
```
首页 | 明细 | 预算 | 统计 | 我的
```

### 桌面端侧边栏
- 🏠 首页
- 📋 明细
- 📊 统计
- 💰 预算
- 👤 个人中心

所有页面都有浮动的 **+ 记一笔** 按钮。

## 开发注意事项

### Tailwind CSS 使用

项目通过 CDN 引入 Tailwind，每个页面都包含自定义配置（内嵌在 `<script id="tailwind-config">` 中）。配色、字体、间距等都已预定义。

**使用示例**：
```html
<!-- 使用预定义颜色 -->
<button class="bg-tertiary text-on-tertiary">确认</button>

<!-- 使用预定义间距 -->
<div class="p-container-padding mb-stack-md">内容</div>

<!-- 使用预定义字体样式 -->
<h1 class="font-headline-lg text-headline-lg">标题</h1>
```

### 数据持久化

使用 localStorage 存储用户数据：
- 消费记录
- 预算设置
- 用户偏好

### 响应式设计

- 移动端优先设计
- 使用 Tailwind 的响应式前缀（`md:`, `lg:`）
- 底部导航在移动端显示，侧边栏在桌面端显示

## 功能模块

| 模块 | 页面 | 核心功能 |
|------|------|----------|
| 认证 | login.html, register.html | 登录、注册 |
| 首页 | home.html | 本月概览、预算进度、最近记录 |
| 记账 | add-expense.html | 快速记录消费 |
| 明细 | records.html | 消费记录列表、筛选 |
| 统计 | statistics.html | 支出分类饼图、趋势分析 |
| 预算 | budget.html | 月度预算设置与追踪 |
| 个人中心 | profile.html | 数据导出/备份/恢复 |

## 待实现功能

- [ ] 用户认证系统（登录/注册/会话管理）
- [ ] 数据持久化逻辑（localStorage API）
- [ ] 可复用导航组件提取
- [ ] 图表数据绑定（Chart.js）
- [ ] 深色模式支持

## 执行完提示我
- 主人，我已经执行完毕！