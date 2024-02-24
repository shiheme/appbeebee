
<template>
  <!-- 首页。处理不同路由显示不同文章数据，包括 tag\category\year\month\pagesnum -->
  <PageSlider></PageSlider>
  <PageNavi type="top" />
  <PageCtrol :bread="breadrxt" :count="posts.length" />
  <Page :posts="getposts" />
  <ArticlePage :page="currentpage" :totalPages="posts.length" :showPages="per_page" @update:page="pageChange" />
  
</template>
<script lang="ts" setup>
import { computed, ref, onMounted, nextTick, watch } from 'vue'
import { useBrowserLocation, useStorage } from '@vueuse/core'
import { useData,useRouter } from 'vitepress'
import { data as themeposts } from '../posts.data'
import { formatSearch } from '../../theme/functions'
import { toast, type ToastOptions } from 'vue3-toastify';
import Welcome from "../../theme/components/Welcome.vue";
import Page from "../../theme/components/Page.vue";
const { theme } = useData();
const welcomestate = useStorage('weclome', false, sessionStorage)
const router = useRouter()
const location = useBrowserLocation()
const activeTag = ref('')
const activeCategory = ref('')
const activeYear = ref('')
const activeMonth = ref('')
const selectTag = computed(() => (activeTag.value))
const selectCategory = computed(() => (activeCategory.value))
const selectYear = computed(() => (activeYear.value))
const selectMonth = computed(() => (activeMonth.value))
const bread = ref('全部内容')
const breadrxt = computed(() => (bread.value))
const posts = computed(() => {
  if (selectCategory.value) {
    return themeposts.filter((article: any) =>
      article?.frontmatter?.categories && article?.frontmatter?.categories.includes(selectCategory.value)
    )
  } else if (selectTag.value) {
    return themeposts.filter((article: any) =>
      article?.frontmatter?.tags && article?.frontmatter?.tags.includes(selectTag.value)
    )
  } else if (selectYear.value && selectMonth.value) {
    return themeposts.filter((article: any) =>
      article?.frontmatter?.date && new Date(article?.frontmatter?.date).getFullYear() + '' == selectYear.value && new Date(article?.frontmatter?.date).getMonth() + 1 + '月' == selectMonth.value
    )
  } else if (selectYear.value) {
    return themeposts.filter((article: any) =>
      article?.frontmatter?.date && new Date(article?.frontmatter?.date).getFullYear() + '' == selectYear.value
    )
  } else {
    return themeposts
  }
})
const per_page = ref(23);
if(theme.value?.website?.showUserCard){
  per_page.value = Number(theme.value?.website?.perpage) - 1
} else {
  per_page.value = Number(theme.value?.website?.perpage)
}

const currentpage = ref(1) //当前第几页
const getposts = computed(() => {
  return posts.value.slice(per_page.value * (currentpage.value - 1), per_page.value * currentpage.value) //获取当前第几页的的文章集合
})

const pageChange = (e: any) => {
  currentpage.value = e
  const { searchParams } = new URL(window.location.href!)
  searchParams.delete('page')
  searchParams.append('page', String(e))
  router.go(
    `${location.value.origin}${router.route.path}?${searchParams.toString()}`
  )
}

router.onBeforeRouteChange = (to) => {
  
  const url = new URL(to, window.location.origin)
  const params = formatSearch(url.search)
  activeTag.value = params?.tag || ''
  activeCategory.value = params?.category || ''
  activeYear.value = params?.year || ''
  activeMonth.value = params?.month || ''
  currentpage.value = Number(params?.page) || 1
  if(params?.tag) {
    console.log('new')
    bread.value  = '标签：'+params.tag
  } else if(params?.category) {
    bread.value  = '分类：'+params.category
  } else if(params?.year&&params?.month) {
    bread.value  = '存档：'+params.year+'/'+params.month
  } else if(params?.year) {
    bread.value  = '存档：'+params.year
  } else {
    bread.value  = '全部内容'
  }
}
watch(
  location,
  () => {
    // console.log('location', location)
    if (location.value.href) {
      const url = new URL(location.value.href!)
      activeTag.value = url.searchParams.get('tag') || ''
      activeCategory.value = url.searchParams.get('category') || ''
      activeYear.value = url.searchParams.get('year') || ''
      activeMonth.value = url.searchParams.get('month') || ''
      currentpage.value = Number(url.searchParams.get('page')) || 1

      if(url.searchParams.get('tag')) {
    bread.value  = '标签：'+url.searchParams.get('tag')
  } else if(url.searchParams.get('category')) {
    bread.value  = '分类：'+url.searchParams.get('category')
  } else if(url.searchParams.get('year')&&url.searchParams.get('month')) {
    bread.value  = '存档：'+url.searchParams.get('year')+'/'+url.searchParams.get('month')
  } else if(url.searchParams.get('year')) {
    bread.value  = '存档：'+url.searchParams.get('year')
  } else {
    bread.value  = '全部内容'
  }
    }
  },
  {
    immediate: true
  }
)
onMounted(() => {
  if (theme.value?.website?.showWelcome&&((theme.value?.website?.welcomeusestate&&!welcomestate.value) || !theme.value?.website?.welcomeusestate)) {
    nextTick(() => {
      toast(Welcome, {
        autoClose: theme.value?.website?.welcome?.autoClose?theme.value.website.welcome.autoClose:false,
        "closeOnClick": false,
        position: toast.POSITION.BOTTOM_RIGHT,
      } as ToastOptions);
      if(theme.value?.website?.welcomeusestate&&!welcomestate.value) {
      welcomestate.value = true
    }
    });
  }
});
</script>
<style>
.Toastify__toast {
  overflow: visible !important;
}</style>