<template>
  <!-- 文章内页顶部的面包屑导航 -->
  <div class="articlebread">
    <a class="a" :href="withBase('/')">首页</a><span class="divider">/</span><span class="cats"
      v-if="dataSource.frontmatter?.categories">
      <a class="a cat" :href="withBase(`/?category=${item}`)"
        v-for="item in dataSource.frontmatter.categories.slice(0, 2)">{{ item }}</a>
    </span><span class="divider">/</span><span class="text">本文内容</span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import type { Post } from '../types'
const props = defineProps<{
  article?: Post
}>();
const dataSource = computed(() => (props.article))
</script>

<style scoped>
.articlebread {
  font-size: 14px;

  .a:hover {
    color: var(--vp-c-brand-1);
  }

  .text {
    opacity: .6;
  }

  .divider {
    margin: 0 8px;
    opacity: .6;
  }
}
</style>