---
post: true
title: 3款开源的有趣的沙雕解压源码项目
date: 2024-01-16
cover: https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlv3g13jpmj21400qo4km.jpg
coveross: https://cdn.enshimama.com/appbeebee/posts/iphone-pro-15-3d-mockups-free.gif
categories:
 - AIGC
tags:
 - 白板
 - 绘画
description:  可以让用户通过绘制软件图像并利用AI将其变为真实可用的代码。
search: false
---
# 4款开源的漂亮的现代化的基于AI绘画面板生成源码工具

## 1.tldraw/tldraw
![tldraw/tldraw](https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlv3giyk96j21400mik2b.jpg)

tldraw 是一个用于在 React 中创建无限画布体验的库。部署后允许多人协同绘制作品。同时结合makereal模型，可以让用户通过绘制软件图像并利用AI将其变为真实可用的代码。

"Make Real"功能使用OpenAI的GPT-4V API将矢量绘图转化为可运行的Tailwind CSS和JavaScript代码，可以复制用户界面，甚至创建类似Breakout的简单游戏。

该项目允许你本地部署学习，如果需要发布则需要获得商业授权。目前在 github已经获得 30.5k 的 star

<ArticleLink via="post" :work="{
    title: 'tldraw/tldraw',
    view: 'https://www.tldraw.com/',
    github: 'tldraw/tldraw',
    coveross: '',
    beecode: '',
    viewtit: '访问网站',
    wxwords: '',
    }" />

<ArticleLink via="post" :work="{
    title: 'tldraw/make-real',
    view: 'https://makereal.tldraw.com/',
    github: 'tldraw/make-real',
    coveross: '',
    beecode: '',
    viewtit: '访问网站',
    wxwords: '',
    }" />


## 2.SawyerHood/draw-a-ui
![SawyerHood/draw-a-ui](https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlv3gw3lhng20go09e1kx.jpg)

这是一个 Next.js 应用程序。上面提到的tldraw/make-real模型便是基于此项目 fork而来。

此项目使用 tldraw 和 gpt-4-vision api 根据您绘制的线框生成 html 应用程序。

其工作原理是获取当前画布 SVG，将其转换为 PNG，然后将该 png 发送到 gpt-4-vision，并附有指令以返回带有 tailwind 的单个 html 文件。

<ArticleLink via="post" :work="{
    title: 'SawyerHood/draw-a-ui',
    view: 'https://www.draw-a-ui.com/',
    github: 'SawyerHood/draw-a-ui',
    coveross: '',
    beecode: '',
    viewtit: '访问网站',
    wxwords: '',
    }" />

## 3.didi/LogicFlow
![didi/LogicFlow](https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlv3hdqj2vg21i20ugkjl.jpg)

LogicFlow是一个流程图编辑框架，提供了一系列流程图交互和编辑所必需的功能，以及简单灵活的节点定制、插件等扩展机制，使我们能够快速满足业务系统中类流程图的需求。

#### 特征
1. 图的绘制能力。基于 SVG 来绘制形状各异的节点和线，并提供了基础的节点（矩形、圆形、多边形等）和线（直线、折线、曲线）
2. 各类交互能力，让图动起来。根据节点、线、图的各类鼠标事件（hover、点击、拖拽等）做出反应。比如节点拖拽、拖拽创建连线、线的调整、双击节点编辑文本等
3. 提升编辑效率的能力。提供网格、对齐线，上一步、下一步，键盘快捷键，图放大缩小等配套能力，帮助用户提升编辑效率
4. 提供了丰富的 API ，宿主研发通过 API 传参调用和监听事件的方式，与 LogicFlow 完成交互通过以上能力，前端研发可以低成本、快速的搭建起流程可视化的应用，提供流畅的产品交互。
5. 高可扩展性。兼容各种产品定制的流程编辑需求，大部分模块都以插件的形式实现，并且支持各个模块自由插拔。
6. 独立完整。流程图可以充分表达业务逻辑，不受流程引擎的限制。
7. 专业。专注于业务流程编辑

目前在 github已经获得 6.3k 的 star

<ArticleLink via="post" :work="{
    title: 'didi/LogicFlow',
    view: 'https://site.logic-flow.cn/examples/#/gallery',
    github: 'didi/LogicFlow',
    coveross: '',
    beecode: '',
    viewtit: '访问网站',
    wxwords: '',
    }" />


## 4.excalidraw/excalidraw
![excalidraw/excalidraw](https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlv3g13jpmj21400qo4km.jpg)

Excalidraw 是一款轻量的手绘风格电子白板在线应用，无论是 Windows / macOS / linux，甚至是手机，打开浏览器就能使用，能简单地画出美观漂亮的流程图、示意图和开发架构图等常用图片，也可以作为会议画板使用，不仅是一款优秀的画图应用，也是一款自由便捷的电子白板应用。

#### 特征
- 💯 免费且开源。
- 🎨 无限的、基于画布的白板。
- ✍️类似手绘的风格。
- 🌓 黑暗模式。
- 🏗️可定制。
- 📷 图片支持。
- 😀 形状库支持。
- 👅 本地化（i18n）支持。
- 🖼️ 导出为 PNG、SVG 和剪贴板。
- 💾 开放格式 - 将图纸导出为.excalidrawjson 文件。
- ⚒️ 多种工具 - 矩形、圆形、菱形、箭头、线条、自由绘制、橡皮擦...
- ➡️ 箭头绑定和标记箭头。
- 🔙 撤消/重做。
- 🔍 缩放和平移支持。

并且 https://libraries.excalidraw.com/ 提供大量的可使用的绘画素材，各种手绘风格的图标、箭头、流程和图标等

<ArticleLink via="post" :work="{
    title: 'excalidraw/excalidraw',
    view: 'https://excalidraw.com/',
    github: 'excalidraw/excalidraw',
    coveross: '',
    beecode: '',
    viewtit: '访问网站',
    wxwords: '',
    }" />

同时，许多开源的Excalidraw魔改版值得使用：

### 1. [revezone/revezone](https://github.com/revezone/revezone)

一款以图形为中心、轻量级、本地优先的用于构建第二大脑的效率工具。支持 Excalidraw、Tldraw 白板和类 Notion 笔记。

https://github.com/revezone/revezone

### 2. [linkxzhou/excalidraw-plus](https://github.com/linkxzhou/excalidraw-plus)

excalidraw扩展版本

 - 中文手写体
 - 多画布功能
 - 多模板增加字段适配脚本
 - 增加选择颜色种类

https://github.com/linkxzhou/excalidraw-plus

### 3. [zsviczian/obsidian-excalidraw-plugin](https://github.com/zsviczian/obsidian-excalidraw-plugin)

Obsidian-Excalidraw 插件将功能丰富的绘图工具Excalidraw集成到 Obsidian 中。您可以在 Vault 中存储和编辑 Excalidraw 文件，可以将工程图嵌入到文档中，还可以链接到 Excalidraw 之间的文档和其他工程图。

https://github.com/zsviczian/obsidian-excalidraw-plugin

### 4. [korbinzhao/excalidraw-cn](https://github.com/korbinzhao/excalidraw-cn)

Excalidraw-CN 是支持中文手写和多亮度的Excalidraw白板工具。Excalidraw-CN是一款基于Excalidraw的支持中文手绘字体和多画布的白板。

在线使用： https://revezone.com/index.html  
源码： https://github.com/korbinzhao/excalidraw-cn

### 5. [dai-shi/excalidraw-claymate](https://github.com/dai-shi/excalidraw-claymate)

一个基于 Excalidraw 的工具，可用于用于创建定格动画和幻灯片。

在线使用： https://dai-shi.github.io/excalidraw-claymate/  
源码： https://github.com/dai-shi/excalidraw-claymate



