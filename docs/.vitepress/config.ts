import { defineConfig } from 'vitepress'
import { genFeed } from './theme/genFeed'
import { head } from './theme/head';
import type { ThemeConfig } from './theme/types';
export default defineConfig<ThemeConfig>({
    title: 'APP比比',
    base: '/',
    head,
    description: 'github开源作品，开源小程序作品，vueJS项目作品，vue3+ts+vite构建项目教学',
    ignoreDeadLinks: true,
    themeConfig: {
        sidebar:[{}],
        music:[
            {
                "id": "song_1",
                "title": "陷落Falling",
                "author": "不知名选手Au / 马也_Crabbit",
                "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0Nzk=",
                "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/01.jpg",
                "lrc": ""
            },
            {
                "id": "song_2",
                "title": "一个人想着一个人 ",
                "author": "如懿",
                "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0ODA=",
                "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/02.jpg",
                "lrc": ""
            },
            {
                "id": "song_3",
                "title": "夜车（Cover 曾轶可）",
                "author": "姜铭杨",
                "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0ODE=",
                "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/03.jpg",
                "lrc": ""
            }
        ],
        nav: [
            { text: '公众号', link: 'https://mp.weixin.qq.com/s/iCf-QOnKk2WPjVqL6jJ8WA' },
            { text: '比比原创小程序', link: 'https://beebee.work/' }
        ],
        search: {
            provider: 'local',
            options: {
                locales: {
                    root: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        },
        outlineTitle: '目录',
        socialLinks: [
            { icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" fill="currentColor"></path></svg>'
              }, link: 'https://github.com/shiheme/' },
            { icon: {
                svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.223 3.08609C18.7112 3.57424 18.7112 4.3657 18.223 4.85385L17.08 5.99622L18.25 5.99662C20.3211 5.99662 22 7.67555 22 9.74662V17.2466C22 19.3177 20.3211 20.9966 18.25 20.9966H5.75C3.67893 20.9966 2 19.3177 2 17.2466V9.74662C2 7.67555 3.67893 5.99662 5.75 5.99662L6.91625 5.99622L5.77466 4.85481C5.28651 4.36665 5.28651 3.5752 5.77466 3.08704C6.26282 2.59889 7.05427 2.59889 7.54243 3.08704L10.1941 5.73869C10.2729 5.81753 10.339 5.90428 10.3924 5.99638L13.6046 5.99661C13.6581 5.90407 13.7244 5.81691 13.8036 5.73774L16.4553 3.08609C16.9434 2.59793 17.7349 2.59793 18.223 3.08609ZM18.25 8.50662H5.75C5.09102 8.50662 4.55115 9.01654 4.50343 9.66333L4.5 9.75662V17.2566C4.5 17.9156 5.00992 18.4555 5.65671 18.5032L5.75 18.5066H18.25C18.909 18.5066 19.4489 17.9967 19.4966 17.3499L19.5 17.2566V9.75662C19.5 9.06626 18.9404 8.50662 18.25 8.50662ZM8.25 11.0066C8.94036 11.0066 9.5 11.5663 9.5 12.2566V13.5066C9.5 14.197 8.94036 14.7566 8.25 14.7566C7.55964 14.7566 7 14.197 7 13.5066V12.2566C7 11.5663 7.55964 11.0066 8.25 11.0066ZM15.75 11.0066C16.4404 11.0066 17 11.5663 17 12.2566V13.5066C17 14.197 16.4404 14.7566 15.75 14.7566C15.0596 14.7566 14.5 14.197 14.5 13.5066V12.2566C14.5 11.5663 15.0596 11.0066 15.75 11.0066Z" fill="currentColor"></path></svg>'
              }, link: 'https://space.bilibili.com/21625708' }
        ],
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        },
        darkModeSwitchLabel:'暗黑切换',
        sidebarMenuLabel:'菜单',
        returnToTopLabel:'返回顶部',
        articlecc: {
            author: '小鱼哥',
            authorLink: 'https://appbeebee.com/',
            license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
            licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/'
        },
        website: {
            showFooter: true,
            icpRecordCode: '鄂ICP备2022014994号-1',
            publicSecurityRecordCode: '鄂公网安备42282202000143号',
            link:'https://appbeebee.com/',
            copyright: `Copyright © 2019-${new Date().getFullYear()} Charles7c`
        },
        logo: {
            light: '/logo.png',
            dark: '/logo.png'
          }
    },
    srcExclude: ['README.md'],
    vite: {
        server: { port: 5000,
            host: '0.0.0.0' }
    },
    buildEnd: genFeed
})
