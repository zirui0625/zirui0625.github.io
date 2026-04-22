# 自定义指南 - 如何修改你的论文主页

本指南将帮助你快速自定义论文主页。

## 目录

1. [基本内容修改](#基本内容修改)
2. [添加图像](#添加图像)
3. [颜色和样式](#颜色和样式)
4. [添加新部分](#添加新部分)
5. [删除不需要的部分](#删除不需要的部分)

---

## 基本内容修改

### 1. 修改页面标题（浏览器标签页标题）

在 `index.html` 中找到：
```html
<title>Paper Title - Your Name</title>
```

改为：
```html
<title>你的论文标题 - 你的名字</title>
```

### 2. 修改论文标题

找到：
```html
<h1 class="title is-2 publication-title">
  Your Paper Title Here
</h1>
```

改为：
```html
<h1 class="title is-2 publication-title">
  你的论文标题
</h1>
```

### 3. 修改作者和机构

找到：
```html
<span class="author-block">
  <strong>Author 1</strong><sup>*1</sup> &nbsp;
  <strong>Author 2</strong><sup>*2</sup> &nbsp;
  <strong>Author 3</strong><sup>*1</sup>
</span>
```

改为：
```html
<span class="author-block">
  <strong>作者1</strong><sup>*1</sup> &nbsp;
  <strong>作者2</strong><sup>*2</sup> &nbsp;
  <strong>作者3</strong><sup>*1</sup>
</span>
```

修改机构信息：
```html
<span><sup>1</sup>你的大学/研究所</span> &nbsp;&nbsp;
<span><sup>2</sup>其他机构</span>
```

### 4. 修改会议和论文ID

找到：
```html
<span class="tag is-info">Conference 2024/2025</span>
<span class="tag is-light" style="margin-left:0.5rem">Paper ID: XXX</span>
```

改为：
```html
<span class="tag is-info">CVPR 2024</span>
<span class="tag is-light" style="margin-left:0.5rem">Paper ID: 123</span>
```

### 5. 添加链接

在"论文链接"部分找到：
```html
<a href="#" class="button is-rounded is-link is-small">
  <span class="icon"><i class="fas fa-file-pdf"></i></span>
  <span>Paper</span>
</a>
```

改为：
```html
<a href="https://arxiv.org/pdf/xxxx.xxxxx.pdf" class="button is-rounded is-link is-small">
  <span class="icon"><i class="fas fa-file-pdf"></i></span>
  <span>Paper</span>
</a>
```

同样修改其他链接（代码和数据集）。

### 6. 修改摘要

找到 Abstract 部分：
```html
<p>
  Write your paper abstract here. This section should briefly summarize...
</p>
```

替换为你的摘要内容。

---

## 添加图像

### 1. 准备图像文件

1. 将你的图像保存为 PNG 或 JPEG 格式
2. 建议分辨率：宽度 800-1200px
3. 将图像放到 `images/` 文件夹

### 2. 引用图像

**方法流程图**：

找到：
```html
<div class="overview-img-wrap">
  <img src="images/placeholder-method.png" alt="Method pipeline" style="background:#f5f5f5;">
</div>
```

改为：
```html
<div class="overview-img-wrap">
  <img src="images/your-method-image.png" alt="Method pipeline" style="background:#f5f5f5;">
</div>
```

**结果图像**：

在 Visual Results 部分找到：
```html
<img src="images/placeholder-result.png" alt="Baseline">
```

替换为你的结果图像路径。

### 3. 添加图像对比滑块

HTML中的 `<img-comparison-slider>` 元素允许用户拖动滑块来比较两张图像。

示例：
```html
<div class="comparison-slider-wrap">
  <span class="sol sol-left">Baseline</span>
  <span class="sol sol-right">Ours</span>
  <img-comparison-slider>
    <figure slot="first" style="margin:0;">
      <img src="images/baseline-result.jpg" alt="Baseline">
    </figure>
    <figure slot="second" style="margin:0;">
      <img src="images/our-result.jpg" alt="Ours">
    </figure>
  </img-comparison-slider>
</div>
```

---

## 颜色和样式

### 1. 修改主色（链接、按钮等）

在 `css/paper.css` 中找到（如果不存在，在 `css/paper.css` 末尾添加）：

```css
:root {
  --primary-color: #3273dc;  /* Bulma蓝色 */
}

a {
  color: var(--primary-color);
}
```

修改 `--primary-color` 为你想要的颜色代码。

常用颜色代码：
- 蓝色：`#3273dc`
- 红色：`#f14668`
- 绿色：`#48c774`
- 橙色：`#ffdd57`
- 紫色：`#b86bdf`

### 2. 修改背景颜色

找到：
```html
<section class="hero is-light">
```

可选值：
- `is-light`（浅灰）
- `is-white`（白色）
- `is-primary`（主色）
- `is-info`（蓝色）
- `is-success`（绿色）
- `is-warning`（黄色）
- `is-danger`（红色）

### 3. 修改字体大小

在 Bulma 中，常用的标题大小类：
- `title is-1`（最大，30px）
- `title is-2`（28px）
- `title is-3`（24px）
- `title is-4`（20px）
- `title is-5`（18px）
- `subtitle is-5`（18px，较轻）

在HTML中修改class：
```html
<h1 class="title is-3">较小的标题</h1>
```

---

## 添加新部分

### 添加新的内容部分

复制以下模板并在合适位置插入：

```html
<!-- ══════════════ NEW SECTION ══════════════ -->
<section class="section">
  <div class="container is-max-desktop">
    <p class="section-label">Section Title</p>
    
    <div class="content">
      <p>Your content here...</p>
    </div>
  </div>
</section>

<hr class="section-divider">
```

### 添加表格

```html
<table class="table is-striped is-hoverable">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
      <td>Data 3</td>
    </tr>
    <tr>
      <td>Data 4</td>
      <td>Data 5</td>
      <td>Data 6</td>
    </tr>
  </tbody>
</table>
```

### 添加列布局

```html
<div class="columns is-multiline">
  <div class="column is-half">
    <div class="box">
      <h3 class="title is-5">Title 1</h3>
      <p>Content 1</p>
    </div>
  </div>
  
  <div class="column is-half">
    <div class="box">
      <h3 class="title is-5">Title 2</h3>
      <p>Content 2</p>
    </div>
  </div>
</div>
```

---

## 删除不需要的部分

### 删除某个部分

找到相应的 `<section>...</section>` 块和上面的 `<hr class="section-divider">` 分隔线，全部删除。

例如，删除"Comparison with State-of-the-Art"部分：

找到：
```html
<hr class="section-divider">

<!-- ══════════════ §4 · COMPARISON WITH SOTA ══════════════ -->
<section class="section">
  ...所有内容...
</section>
```

全部删除。

### 删除链接按钮

找到：
```html
<div class="paper-links" style="margin-top:1rem">
  <a href="#" class="button is-rounded is-link is-small">...</a>
  ...其他按钮...
</div>
```

删除你不需要的按钮或整个 `<div class="paper-links">` 元素。

---

## 常见修改示例

### 示例1：修改作者为单位制

原始：
```html
<span class="author-block">
  <strong>Author 1</strong><sup>*1</sup> &nbsp;
  <strong>Author 2</strong><sup>*2</sup>
</span>
```

修改为：
```html
<span class="author-block">
  <strong>张三</strong><sup>*</sup> &nbsp;
  <strong>李四</strong><sup>*</sup> &nbsp;
  <strong>王五</strong><sup>†</sup>
</span>
<div class="is-size-6 publication-affiliations" style="margin-top:0.5rem; color:#666;">
  <span><sup>*</sup>清华大学计算机系</span> &nbsp;&nbsp;
  <span><sup>†</sup>北京大学人工智能研究院</span>
</div>
```

### 示例2：只保留论文链接

```html
<div class="paper-links" style="margin-top:1rem">
  <a href="https://arxiv.org/pdf/2024.xxxxx.pdf" class="button is-rounded is-link is-small">
    <span class="icon"><i class="fas fa-file-pdf"></i></span>
    <span>PDF</span>
  </a>
</div>
```

### 示例3：添加视频演示

```html
<hr class="section-divider">

<section class="section">
  <div class="container is-max-desktop">
    <p class="section-label">Video Demonstration</p>
    
    <div style="text-align:center;">
      <video width="800" controls style="max-width:100%; border-radius:8px;">
        <source src="images/demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</section>
```

---

## 需要帮助？

- **Bulma框架文档**：https://bulma.io/documentation/
- **HTML参考**：https://developer.mozilla.org/en-US/docs/Web/HTML
- **CSS参考**：https://developer.mozilla.org/en-US/docs/Web/CSS
- **FontAwesome图标**：https://fontawesome.com/search

---

**最后更新**: 2024年4月
