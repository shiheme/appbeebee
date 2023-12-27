<template>
  <!-- 文章内页底部的相关文章列表 -->
  <div class="articlerelate" v-if="posts.length">
    <h2 class="h2">相关推荐</h2>
    <div class="postlist"
      :class="{ grid: listview === 'grid', list: listview === 'list', hasaside: frontmatter.aside, hassidebar: frontmatter.sidebar||theme?.sidebar?.length }">
      <div class="list" v-for="(article, index) in posts.slice(0, 6)" :key="index">
        <ArticleList :article="article" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref, toRefs, reactive } from 'vue'
import { useData, withBase } from 'vitepress'
import { useStorage } from '@vueuse/core'
import { relatebyTags } from '../functions'
import { data as themeposts } from '../posts.data'
const { theme, page, frontmatter } = useData()
const listview = useStorage('listview', 'grid')
const article = {
  frontmatter: page.value?.frontmatter,
  relativePath: page.value?.relativePath
}
const posts = computed(() => relatebyTags(themeposts, article))

</script>

<style scoped>
.articlerelate {
  .h2 {
    font-size: 16px;
    margin: 48px 0 16px;
    border-top: 1px solid var(--vp-c-divider);
    padding-top: 24px;
    letter-spacing: -0.02em;
    line-height: 32px;
  }
}
</style>
