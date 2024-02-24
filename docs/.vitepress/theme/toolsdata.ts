// 导航数据。因内容不多，固采用 json方式。如果内容很多，可以考虑和文章一样的调用方法
import type { Tools } from './types'

export const toolsdata: Tools[] = [
  {
    title: '设计',
    items: [
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hl1ksv896vj2040040gld.jpg',
        title: 'fococlipping',
        desc: '去除图片背景，透明背景',
        link: 'https://www.fococlipping.com/clip',
        linktxt: 'fococlipping.com',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hl1kwegq4xj2040040gls.jpg',
        title: 'iconscout',
        desc: 'lottie动画转多种格式',
        link: 'https://iconscout.com/converter/lottie-to-gif',
        linktxt: 'iconscout.com',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hl1kzxqb8uj2040040weh.jpg',
        title: 'lottiefiles',
        desc: '免费lottie动画图标制作',
        link: 'https://lottiefiles.com/featured',
        linktxt: 'lottiefiles.com',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hl1l9rs87mj20400403yq.jpg',
        title: 'remix',
        desc: '好看又全的图标',
        link: 'https://remixicon.com/',
        linktxt: 'remixicon.com',
      }
    ],
  },
  {
    title: '开发',
    items: [
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hl1ld9d136j2040040aa2.jpg',
        title: 'wordpress',
        desc: 'Wordpress Dashicons',
        link: 'https://developer.wordpress.org/resource/dashicons/',
        linktxt: 'wordpress.org',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hl1nmmgepyj2040040glq.jpg',
        title: 'vitepress',
        desc: 'VitePress开发文档',
        link: 'https://vitepress.dev/',
        linktxt: 'vitepress.dev',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hl1nmmg8vtj20400400ss.jpg',
        title: '图鸟组件库',
        desc: 'uniapp组件图鸟开发文档',
        link: 'https://vue3.tuniaokj.com/zh-CN/',
        linktxt: 'tuniaokj.com',
      }
    ],
  },
  {
    title: '大厂AI',
    items: [
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlp0rf7oz9j202s02s0sq.jpg',
        title: '文心一言',
        desc: '百度文心大模型对话工具',
        link: 'https://yiyan.baidu.com/',
        linktxt: 'yiyan.baidu.com',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlp0vzegabj202s02swej.jpg',
        title: 'Sparkdesk',
        desc: '讯飞星火认知大模型对话工具',
        link: 'https://xinghuo.xfyun.cn/desk',
        linktxt: 'xinghuo.xfyun.cn',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlp0v16ojsj202s02s0ss.jpg',
        title: '通义千问',
        desc: '阿里人工智能大模型对话工具',
        link: 'https://tongyi.aliyun.com/qianwen/',
        linktxt: 'tongyi.aliyun.com',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlp0ursgp0j202i02iaa1.jpg',
        title: '混元助手',
        desc: '腾讯出品AI对话助手',
        link: 'https://hunyuan.tencent.com/bot/chat',
        linktxt: 'hunyuan.tencent.com',
      },
      {
        icon: 'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlp0ujc888j202s02smx8.jpg',
        title: '豆包',
        desc: '抖音出品AI对话助手',
        link: 'https://www.doubao.com/',
        linktxt: 'doubao.com',
      }
    ],
  },
]
