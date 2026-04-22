# 部署到GitHub Pages指南

本文档详细说明如何将这个论文主页部署到GitHub Pages。

## 前提条件

1. 已有GitHub账号：https://github.com
2. 已创建GitHub Pages仓库：https://github.com/zirui0625/zirui0625.github.io
3. 已在本地安装Git

## 快速开始（3步）

### 第一步：初始化本地仓库

```bash
cd /Users/wangzirui/paper-homepage
git init
git add .
git commit -m "Initial commit: paper homepage"
```

### 第二步：连接到GitHub仓库

```bash
git remote add origin https://github.com/zirui0625/zirui0625.github.io.git
git branch -M main
```

### 第三步：推送到GitHub

```bash
git push -u origin main
```

## 完整流程

### 1. 准备工作

**编辑本地文件**：
- 打开 `/Users/wangzirui/paper-homepage/index.html`
- 更新以下内容：
  - 论文标题：`<h1 class="title is-2 publication-title">`
  - 作者名单：`<span class="author-block">`
  - 所属机构：`<span class="publication-affiliations">`
  - 论文链接、代码链接、数据集链接

**添加图像**：
- 将论文方法流程图放到 `images/` 目录
- 修改HTML中图像的src路径
- 推荐图像格式：PNG、JPEG，大小800-1200px宽度

### 2. 提交代码

```bash
cd /Users/wangzirui/paper-homepage

# 第一次使用，配置Git用户信息
git config --global user.email "你的邮箱@example.com"
git config --global user.name "你的名字"

# 添加所有文件
git add .

# 创建提交信息
git commit -m "添加论文主页内容"

# 推送到GitHub
git push origin main
```

### 3. 验证部署

1. 访问 https://github.com/zirui0625/zirui0625.github.io
   - 检查文件是否已上传

2. 访问 https://zirui0625.github.io/
   - 等待1-2分钟让GitHub Pages构建
   - 刷新页面查看你的主页

3. 如果未显示，检查仓库设置：
   - 打开仓库 → Settings → Pages
   - 确保"Source"设置为"main"分支
   - "Build and deployment"选择"GitHub Actions"

## 更新内容

当你想要更新主页内容时：

```bash
cd /Users/wangzirui/paper-homepage

# 编辑文件...

# 提交更改
git add .
git commit -m "更新：添加新的结果"
git push origin main
```

更新通常在5-10分钟内生效。

## 常见问题

### Q1: 页面显示404错误
**A**: 
1. 检查仓库名称是否正确：`zirui0625.github.io`
2. 检查文件是否真的上传到GitHub
3. 等待几分钟让GitHub Pages重新构建

### Q2: 样式没有加载
**A**: 
1. 检查浏览器开发者工具(F12)中的Console标签，查看错误信息
2. 确认所有CSS文件都在 `css/` 目录中
3. 清除浏览器缓存：Ctrl+Shift+Delete (Cmd+Shift+Delete on Mac)

### Q3: 图像显示不出来
**A**: 
1. 检查图像文件是否在 `images/` 目录中
2. 检查HTML中的src路径是否正确
3. 图像格式必须是支持的类型：PNG、JPEG、GIF、WebP

### Q4: 想要使用自定义域名
**A**: 
1. 购买域名（如 example.com）
2. 在仓库根目录创建 `CNAME` 文件，内容为：`example.com`
3. 在域名提供商处添加DNS记录（具体步骤参考GitHub文档）
4. 在仓库Settings → Pages中配置自定义域名

## 目录结构说明

```
paper-homepage/
├── index.html              # 主页面（重要：放在根目录）
├── README.md              # 项目说明
├── .gitignore             # Git忽略文件配置
├── DEPLOYMENT.md          # 本文件
├── css/                   # 样式文件
│   ├── bulma.min.css     # 框架CSS
│   ├── fontawesome.all.min.css  # 图标CSS
│   └── paper.css         # 自定义样式
├── js/                    # 脚本文件
│   ├── paper.js          # 自定义脚本
│   └── fontawesome.all.min.js  # 图标库
├── webfonts/             # 字体文件
└── images/               # 图像文件
    ├── placeholder-method.svg
    └── [你的论文图像]
```

## 高级技巧

### 1. 添加Google Analytics（可选）

在 `index.html` 的 `</head>` 前添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 2. SEO优化

编辑 `<head>` 中的meta标签：

```html
<meta name="description" content="论文的简短描述">
<meta name="keywords" content="关键词1, 关键词2, 关键词3">
<meta name="author" content="你的名字">
```

### 3. 添加视频演示

在 `index.html` 中添加：

```html
<div style="text-align:center; margin:2rem 0;">
  <video width="600" controls style="max-width:100%;">
    <source src="images/demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>
```

## 获取帮助

- GitHub Pages文档：https://docs.github.com/en/pages
- Bulma CSS框架：https://bulma.io/
- 图标库(FontAwesome)：https://fontawesome.com/

---

**最后更新**: 2024年4月
