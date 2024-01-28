import DefaultTheme from 'vitepress/theme'
import Firework from './components/Firework.vue'
import Lantern from './components/Lantern.vue'
import NewLayout from './components/NewLayout.vue'
import Archives from './components/Archives.vue'
import About from './components/About.vue'
import Feed from './components/Feed.vue'
import Tags from './components/Tags.vue'
import ArticleMetadata from './components/ArticleMetadata.vue'
import ArticleBread from './components/ArticleBread.vue'
import ArticleLink from './components/ArticleLink.vue'
import ArticleRelate from './components/ArticleRelate.vue'
import ArticleCC from './components/ArticleCC.vue'
import ArticleList from './components/ArticleList.vue'
import ArticlePage from './components/ArticlePage.vue'
import Home from './components/Home.vue'
import Page from './components/Page.vue'
import PageNavi from './components/PageNavi.vue'
import PageASide from './components/PageASide.vue'
import PageCtrol from './components/PageCtrol.vue'
import PageGZH from './components/PageGZH.vue'
import PageSlider from './components/PageSlider.vue'
import ArticleCarousel from './components/ArticleCarousel.vue'
import Player from './components/Player.vue'
import Tools from './components/Tools.vue'
import Links from './components/Links.vue'
import Welcome from './components/Welcome.vue'
import { createPinia } from 'pinia'  //使用状态管理库。用于音乐播放器的状态监听
import FloatingVue from 'floating-vue'  //使用 tooltip库。用于hover提示、悬浮框等。教程见https://floating-vue.starpad.dev/
import 'floating-vue/dist/style.css'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';  //使用 toast 库。用于弹框提示反馈等。教程见https://vue3-toastify.js-bridge.com/
import 'vue3-toastify/dist/index.css';

import './components/style.css'
import './components/snow.css'  //一个 css3雪花特效，用于暗黑模式下显示雪花

const pinia = createPinia()

export default {
    ...DefaultTheme,
    Layout: NewLayout,  //
    enhanceApp:({app}) => {
        // 注册全局组件
        app.component('Firework', Firework)
        app.component('Lantern', Lantern)
        app.component('Tags', Tags)
        app.component('Archives', Archives)
        app.component('About', About)
        app.component('Feed', Feed)
        app.component('Home', Home)
        app.component('Page', Page)
        app.component('ArticleMetadata', ArticleMetadata)
        app.component('ArticleBread', ArticleBread)
        app.component('ArticleLink', ArticleLink)
        app.component('ArticleRelate', ArticleRelate)
        app.component('ArticleCC', ArticleCC)
        app.component('ArticleCarousel', ArticleCarousel)
        app.component('PageASide', PageASide)
        app.component('PageNavi', PageNavi)
        app.component('PageGZH', PageGZH)
        app.component('PageCtrol', PageCtrol)
        app.component('PageSlider', PageSlider)
        app.component('ArticleList', ArticleList)
        app.component('ArticlePage', ArticlePage)
        app.component('Player', Player)
        app.component('Tools', Tools)
        app.component('Links', Links)
        app.component('Welcome', Welcome)
        app.use(pinia)
        app.use(FloatingVue, {
            themes: {
                'tooltip': {
                    distance: 8,
                    delay: { show: 500, hide: 0 },
                },
            },
        })
        app.use(Vue3Toasity, {
            "theme": "colored",
            "closeOnClick": false,
          } as ToastContainerOptions);
    }
}
