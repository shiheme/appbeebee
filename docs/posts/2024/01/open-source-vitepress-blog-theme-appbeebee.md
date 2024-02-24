---
post: true
title: APP比比博客开源源码-基于vitepress的资源下载博客主题，速度杠杠快
date: 2024-01-21
cover: https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm1ie2tg0ej20k00dcwkd.jpg
coveross: https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm1ieg9mrhj21400qodza.jpg
categories:
 - vueJS
tags:
 - vitepress
 - 博客
 - 主题
description:  基于 vitepress 打造的适合图文资源分享的博客主题
---
# APP比比博客开源源码-基于vitepress的资源下载博客主题，速度杠杠快

## 主题介绍
<ArticleCarousel :list="list" />

这是一款基于 vitepress 打造的适合图文资源分享的博客主题。不改动原有布局的大方向的基础上，做了列表和一些视觉上的调整。这款主题更加适合设计或者开发人员进行资源的整理和分享。

我选择 vitepress就是因为它的速度够快，加上部署到vercel免费无需服务器，整体来说经济实惠又好用，值得大家使用。


## 特征

- 构建速度超级快，比 vuepress快 100 倍，尤其文章内容特别多时，构建速度特别明显
- 支持 github+vercel进行快速部署，省去搭建服务器费用
- vitepress具备完善的文档、社区支持，迭代使用放心
- 本项目在 vitepress默认主题基础上完成改造的功能
    1. 基于路由实现标签、分类、存档、分页功能。方便用户通过页面域名进行分页或者相关内容的查看；
    2. 存档实现年和年+月的形式；
    3. 文章列表分为宫格和列表两种样式，方便用户根据喜好切换；
    4. 内页增加标签、分类面包屑导航等；
    5. 增加阅读时长等常用功能；
    6. 文章内增加一个资源汇总组件。方便资源的出处跳转、 github资源数据获取等；
    7. Feed订阅
    8. 根据标签获取相关文章
    9. 一个工具导航页面
    10. 一个关于页面
- 本项目在 vitepress上基于 vue3+TS实现的一些小特效
    1. 文章列表可嵌入一个博主卡片，可配置是否显示
    2. 博主卡片可配置选择放置音乐播放和打赏咖啡
    3. 背景音乐可配置音乐清单
    4. 打赏咖啡可配置一个二维码图片
    5. 音乐播放器基于pinia管理播放状态
    6. 一个春节灯笼挂件，可配置灯笼文字以及是否显示
    7. 侧栏一个烟花许愿挂件，可配置标题、内容以及是否显示等
    8. 暗黑模式下可配置雪花特效
- 本项目在 vitepress上并入的第三方组件，完美支持运行
    1. 轮播组件
    2. 提示组件
    3. 弹层组件
    4. 消息框组件
    5. VueUse 复制文本、缓存
    7. pinia状态管理
    8. 时间友好化组件

<ArticleLink via="post" :work="{
    title: 'shiheme/appbeebee',
    view: 'https://appbeebee.com/',
    github: 'shiheme/appbeebee',
    coveross: '',
    beecode: '',
    viewtit: '访问网站',
    wxwords: '',
    }" />

## 安装

克隆项目或者直接前往 github仓库页面下载 zip包

```bash
git clone https://github.com/shiheme/appbeebee.git
```

转到项目目录，安装依赖

```bash
cd appbeebee
```

通过 yarn

```bash
yarn add 
```

通过 npm

```bash
npm install
```


<script lang="ts" setup>
import { ref } from 'vue'
const list = ref([
{
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdr08pnj22c01bqb29.jpg',
    title:'文章列表九宫格样式'
},
{
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdr03guj22c01bqb29.jpg',
    title:'播放音乐+存档按年和年/月的形式'
},
    {
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdq92lmj22c01bq1a2.jpg',
    title:'内页'
},
{
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqk4umj22c01bqk52.jpg',
    title:'工具导航'
},
{
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqppztj22c01bqqqb.jpg',
    title:'文章列表简约样式'
},
{
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqrdlzj22c01bq4hn.jpg',
    title:'Feed订阅'
},
{
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqyuaij22c01bqkee.jpg',
    title:'文章页内置资源汇总组件，方便点击查看出处'
},
{
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqzlnrj22c01bq4qp.jpg',
    title:'分页'
},
{
    image:'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0fdr2dlbj22c01bqb29.jpg',
    title:'暗黑模式+标签点击切换'
}]);

</script>



