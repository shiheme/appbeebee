# APP比比

这是一款基于 vitepress 打造的适合图文资源分享的博客主题。不改动原有布局的大方向的基础上，做了列表和一些视觉上的调整。这款主题更加适合设计或者开发人员进行资源的整理和分享。

我选择 vitepress就是因为它的速度够快，加上部署到vercel免费无需服务器，整体来说经济实惠又好用，值得大家使用。

在线体验：[https://appbeebee.com](https://appbeebee.com)

## 版本更新

### v1.1.0 2024-01-27
- 修复烟花兼容
- 搜索使用pagefind插件
- 复制页面内容时添加版权尾巴

### v1.0.0 2024-01-20

- 开源版本发布
- 文章介绍：https://www.appbeebee.com/posts/2024/01/open-source-vitepress-blog-theme-appbeebee.html

## 完成改造的功能
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

## 一些小特效
1. 文章列表可嵌入一个博主卡片，可配置是否显示
2. 博主卡片可配置选择放置音乐播放和打赏咖啡
3. 背景音乐可配置音乐清单
4. 打赏咖啡可配置一个二维码图片
5. 音乐播放器基于pinia管理播放状态
6. 一个春节灯笼挂件，可配置灯笼文字以及是否显示
7. 侧栏一个烟花许愿挂件，可配置标题、内容以及是否显示等
8. 暗黑模式下可配置雪花特效

## 并入的第三方组件
1. 轮播组件
2. 提示组件
3. 弹层组件
4. 消息框组件
5. VueUse 复制文本、缓存
7. pinia状态管理
8. 时间友好化组件

## 预览
![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdq92lmj22c01bq1a2.jpg)
内页

![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqk4umj22c01bqk52.jpg)
工具导航

![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqppztj22c01bqqqb.jpg)
文章列表简约样式

![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqrdlzj22c01bq4hn.jpg)
Feed订阅

![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqyuaij22c01bqkee.jpg)
文章页内置资源汇总组件，方便点击查看出处

![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdqzlnrj22c01bq4qp.jpg)
分页

![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdr03guj22c01bqb29.jpg)
播放音乐+存档按年和年/月的形式

![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdr08pnj22c01bqb29.jpg)
文章列表九宫格样式

![](https://fc.sinaimg.cn/large/6364aa43gy1hm0fdr2dlbj22c01bqb29.jpg)
暗黑模式+标签点击切换

## 开始使用

1. git clone克隆或者直接下载这个仓库到你的本地电脑
2. 本地电脑需要安装 node.js和 npm或者 yarn。不会的百度如何安装
3. 最好电脑安装 Visual Studio Code这个开发者工具，方便管理代码
4. 用上面这个开发工具导入刚下载的这个仓库
5. 工具菜单选择终端 > 新建终端，输入命令 npm install 回车开始安装本仓库用到的依赖，可能需要几分钟时间
6. 安装完成依赖，会生成 node_modules目录
7. 打开 package.json这个文件，文件里有个三角箭头+调试，点击后会看到工具上方出现dev,build等选项，点击 dev进行本地运行看效果
8. 可以看到 app比比的完整博客页面效果
9. 打开docs/.vitepress/config.ts文件进行全局配置，已经注明了各个参数的用途，试着改一下，然后刚刚运行的博客页面会自动变内容
10. 所有前端显示的文章放在 docs/posts/目录下，自己试着新建一个页面，跟着比比的文章格式写一篇文章，自己实践才是真理
11. docs/pages/目录下放的是功能页面，一般无需修改
12. 工具导航数据放在 docs/.vitepress/toolsdata.js里。按照格式添加新的即可
13. docs/prepare/目录下放的是临时存放的还不想发布的文章
14. public和 static目录放一些不会被转义的资源
15. 其他的自行摸索代码
16. 后续公众号【比比工房】会放一些教程，有问题的可以在公众号回复留言问题

## 如何部署上线
我是上传到 github后，使用 vercel进行免费部署的。可以百度如何 vercel部署 github项目。然后买一个域名解析到 vercel就可以了

## 如何添加文章后同步项目到 github
这个基础问题自行百度或者后续前往微信公众号【比比工房】看教程

## 新手如何操作
可能我的教程没考虑新手，如果你是个完全不懂代码的小白，目前仅仅是爱好搭建玩一下，建议先百度问题。然后关注我的公众号找教程，还不会可免费在公众号找到我的联系方式进群和群友交流学习，最后还是不会可以找我付费解决。

## 别忘了 star这个项目
只有 star了这个项目，我的更新就能随时提醒你升级。不然错过了就找不到这么好的开源主题了。就在右上角看到那个 star按钮了吗？动动你修长的小手轻轻点一下就 ok了

## 感谢
这个开源主题，我借鉴了一些大佬的经验，请看这个贴：[https://juejin.cn/post/7322633033227517991](https://juejin.cn/post/7322633033227517991)
特此感谢。

## 公众号比比工房
这个公众号是比比原创作品的发布、教程内容  
[点击关注公众号以及联系我：https://mp.weixin.qq.com/s/iCf-QOnKk2WPjVqL6jJ8WA](https://mp.weixin.qq.com/s/iCf-QOnKk2WPjVqL6jJ8WA)

## 公众号APP比比
这个公众号是比比学习、整理开源的作品内容
![直接扫码关注 app比比公众号](https://cdn.enshimama.com/appbeebee/posts/gzh.png)








