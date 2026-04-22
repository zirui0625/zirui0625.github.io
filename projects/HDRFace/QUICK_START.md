# 快速开始指南 - 5分钟上线你的论文主页

## 📋 第一步：基本信息修改（2分钟）

打开 `index.html`，按以下顺序修改关键内容：

### 1.1 论文标题（第62行）
```html
<!-- 改这行 -->
<h1 class="title is-2 publication-title">
  Your Paper Title Here
</h1>

<!-- 改为 -->
<h1 class="title is-2 publication-title">
  你的论文标题
</h1>
```

### 1.2 作者名单（第65-70行）
```html
<!-- 改这些行 -->
<strong>Author 1</strong><sup>*1</sup> &nbsp;
<strong>Author 2</strong><sup>*2</sup> &nbsp;
<strong>Author 3</strong><sup>*1</sup>

<!-- 改为 -->
<strong>张三</strong><sup>*1</sup> &nbsp;
<strong>李四</strong><sup>*2</sup> &nbsp;
<strong>王五</strong><sup>*1</sup>
```

### 1.3 机构信息（第74-75行）
```html
<!-- 改为你的机构 -->
<span><sup>1</sup>清华大学计算机系</span>
<span><sup>2</sup>北京大学人工智能研究院</span>
```

### 1.4 会议和论文ID（第77-78行）
```html
<span class="tag is-info">CVPR 2024</span>
<span class="tag is-light">Paper ID: 123</span>
```

### 1.5 添加论文链接（第80-94行）
- 第84行：替换 `href="#"` 为你的论文PDF链接
- 第90行：替换 `href="#"` 为你的GitHub代码链接  
- 第96行：替换 `href="#"` 为你的数据集链接

例如：
```html
<a href="https://arxiv.org/pdf/2404.xxxxx.pdf" class="button is-rounded is-link is-small">
```

### 1.6 摘要（第110-120行）
替换摘要内容。

---

## 🖼️ 第二步：添加你的图像（2分钟）

### 2.1 准备图像
1. 将你的论文图像保存为 PNG 或 JPEG 格式
2. 建议大小：宽度800-1200px
3. 将图像放到 `images/` 文件夹

### 2.2 替换方法流程图（第133行）
```html
<!-- 改这行 -->
<img src="images/placeholder-method.png" alt="Method pipeline">

<!-- 改为 -->
<img src="images/your-method-diagram.png" alt="Method pipeline">
```

### 2.3 替换结果图像（第169行和182行）
找到 Visual Results 部分，替换两个 `placeholder-result.png` 为你的结果图像路径。

---

## ⬆️ 第三步：上传到GitHub（1分钟）

### 3.1 打开终端

```bash
cd /Users/wangzirui/paper-homepage
```

### 3.2 第一次使用，配置Git用户

```bash
git config --global user.email "你的邮箱@example.com"
git config --global user.name "你的名字"
```

### 3.3 初始化并提交

```bash
git init
git add .
git commit -m "初始提交：论文主页"
```

### 3.4 连接到GitHub仓库

```bash
git remote add origin https://github.com/zirui0625/zirui0625.github.io.git
git branch -M main
```

### 3.5 推送到GitHub

```bash
git push -u origin main
```

---

## ✅ 完成！查看你的主页

1. 等待2-5分钟让GitHub构建
2. 访问：**https://zirui0625.github.io/**
3. 完成！🎉

---

## 📝 常见修改

### 只想要论文链接？
删除代码链接和数据集链接的按钮代码块。

### 想删除某个部分？
找到对应的 `<section>...</section>` 块，整个删除。

### 想改颜色？
在 `css/paper.css` 末尾添加：
```css
:root {
  --primary-color: #ff6b6b;  /* 改成你喜欢的颜色代码 */
}
```

### 更多修改？
查看 `CUSTOMIZE_GUIDE.md` 获得详细说明。

---

## 🔧 后续更新

当你想修改内容时：

```bash
cd /Users/wangzirui/paper-homepage

# 编辑文件...

# 提交并推送
git add .
git commit -m "更新内容描述"
git push origin main
```

更新通常在5-10分钟内生效。

---

## 🆘 遇到问题？

**问题1：页面显示404**
- 检查：GitHub设置 → Pages → Source是否为"main"分支
- 等待几分钟让GitHub重新构建

**问题2：样式没有加载**
- 清除浏览器缓存：Cmd+Shift+Delete
- 检查Console标签查看错误信息

**问题3：图像显示不出来**
- 确认图像文件在 `images/` 目录中
- 检查HTML中的路径是否正确

---

**下一步：查看 `CUSTOMIZE_GUIDE.md` 学习更多高级修改！**
