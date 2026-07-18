# Velvet Ledger - 个人财务管家

优雅简洁的个人财务管理系统 Web 原型，基于 **Velvet Design System** 设计语言。

## 项目结构

```
frontend/velvet_ledger/
├── docs/                    # 设计文档
│   └── DESIGN.md            # Velvet Design System 设计规范
├── public/                  # 静态公共资源（待用）
├── src/
│   ├── assets/             # 本地静态资源（待用）
│   ├── components/          # 可复用组件（待开发）
│   ├── pages/               # 页面文件
│   │   ├── login.html       # 登录页
│   │   ├── register.html     # 注册页
│   │   ├── home.html        # 首页（仪表盘）
│   │   ├── records.html      # 消费明细页
│   │   ├── statistics.html   # 统计页
│   │   ├── budget.html       # 预算页
│   │   ├── profile.html     # 个人中心页
│   │   └── add-expense.html  # 记一笔页
│   └── styles/               # 样式文件
│       ├── base.css          # 共享基础样式
│       └── tailwind.config.js # Tailwind CSS 配置
└── README.md                # 本文件
```

## 页面说明

| 页面 | 文件 | 功能描述 |
|------|------|----------|
| 登录 | login.html | 用户名密码登录，支持记住登录状态 |
| 注册 | register.html | 新用户注册账号 |
| 首页 | home.html | 仪表盘概览，本月支出、预算进度、最近记录 |
| 消费明细 | records.html | 消费记录列表，支持分类筛选 |
| 统计 | statistics.html | 支出分类占比图表，30天趋势分析 |
| 预算 | budget.html | 月度预算设置与追踪，储蓄目标 |
| 个人中心 | profile.html | 用户信息、数据导出/备份/恢复 |
| 记一笔 | add-expense.html | 快速新增消费记录 |

## 设计系统

### 色彩规范（Velvet Theme）

| 角色 | 色值 | 用途 |
|------|------|------|
| Primary | #685a67 | 主色调，按钮、导航高亮 |
| Secondary | #75546e | 次要色，交互元素 |
| Tertiary | #78517c | 强调色，成功状态 |
| Background | #fff8f8 | 页面背景 |
| Surface Container | #ffe8f1 | 卡片容器背景 |
| Error | #ba1a1a | 错误提示 |
| On Surface | #2d1323 | 主要文字 |

### 字体

- **主字体**：Hanken Grotesk（Google Fonts）
- **图标字体**：Material Symbols Outlined

### 设计风格

- **Ethereal Minimalism**：柔和、轻盈、质感
- **毛玻璃效果**：背景模糊 + 半透明
- **圆角设计**：卡片圆角 16px，按钮圆角 24px
- **柔和阴影**：带色调的轻柔阴影

## 技术栈

- **HTML5** + **CSS3** + **JavaScript**
- **Tailwind CSS**（CDN 引入）
- **Google Fonts**（Hanken Grotesk + Material Symbols）
- **Chart.js**（图表，CDN 引入）

## 运行方式

直接在浏览器中打开 `src/pages/` 下的任意 HTML 文件即可预览。

推荐入口页面：
- 游客入口：`login.html`
- 直接进入 App：`home.html`

## 导航结构

```
┌─────────────────────────────────────┐
│           移动端底部导航             │
├─────────────────────────────────────┤
│  首页  │  明细  │  预算  │  统计  │  我的  │
└─────────────────────────────────────┘
              ↓ 点击跳转
┌─────────────────────────────────────┐
│           桌面端侧边栏             │
├─────────────────────────────────────┤
│  🏠 首页                            │
│  📋 明细                            │
│  📊 统计                            │
│  💰 预算                            │
│  👤 个人中心                        │
│                                     │
│         [+ 记一笔]                   │
└─────────────────────────────────────┘
```

## 待开发功能

- [ ] 用户认证系统（登录/注册/会话管理）
- [ ] 数据持久化（localStorage）
- [ ] 可复用导航组件提取
- [ ] 移动端适配优化
- [ ] 深色模式支持

## 设计规范

详见 [docs/DESIGN.md](docs/DESIGN.md)

---

© 2024 个人财务管家 - Velvet Ledger
