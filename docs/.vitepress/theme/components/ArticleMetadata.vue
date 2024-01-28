

<template>
  <!-- 文章通用数据字段。根据判断是列表还是内页进行区分显示。type === 'single'表示在内页显示 -->
  <div class="articlemeta" :class="{ grid: listview === 'grid', list: listview === 'list' }">
    <h1 class="h1" v-if="type === 'single'">{{ dataSource.frontmatter?.title }}</h1>
    <div class="meta">
      <p class="date" v-if="dataSource.frontmatter?.date">
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z">
          </path>
        </svg>
        <time class="time"
          :datetime="dataformat === 0 ? formatTime(dataSource.frontmatter.date) : relativeTime(dataSource.frontmatter.date)">{{
            dataformat === 0 ? formatTime(dataSource.frontmatter.date) : relativeTime(dataSource.frontmatter.date) }}</time>
      </p>
      <div class="tags" v-if="dataSource.frontmatter?.tags">
        <template v-if="type !== 'single'">
          <span class="tag" v-for="item in dataSource.frontmatter.tags.slice(0, 2)"><a class="a"
              :href="withBase(`/?tag=${item.toString()}`)"> {{
                '#' + item }}</a></span>
          <span class="tag" v-if="dataSource.frontmatter.tags.length > 2">...</span>
        </template>
        <template v-else>
          <span class="tag" v-for="item in dataSource.frontmatter.tags"><a class="a" :href="withBase(`/?tag=${item.toString()}`)"> {{
            '#' + item }}</a></span>
        </template>
      </div>
    </div>
    <p class="readtime" v-if="type === 'single'"><span class="warning">全文共{{ wordCount }}字，{{ '预计阅读' + readTime + '分钟'
    }}</span></p>
    <!-- <div class="cover" v-if="type === 'single' && dataSource.frontmatter?.cover">
      <p>
        <img class="img" :src="dataSource.frontmatter.cover" alt="效果">
      </p>
    </div> -->
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { withBase } from 'vitepress'
import { useStorage } from '@vueuse/core'
import type { Post } from '../types'
import { relativeTime, formatTime, countWord } from '../functions'
const listview = useStorage('listview', 'grid')
const dataformat = ref(0)
const props = defineProps<{
  article?: Post
  type?: string
}>();
const dataSource = computed(() => (props.article))

// console.log('dddd',dataSource.value)

if (dataSource.value?.frontmatter?.date) {
  if ((new Date().getTime() - new Date(dataSource.value?.frontmatter?.date).getTime()) / (24 * 60 * 60 * 1000) < 365) {
    dataformat.value = 1 //判断发布日期距离现在365天以内则显示人性化时间
  } else {
    dataformat.value = 0
  }
}
const wordCount = ref(0)
const imageCount = ref(0)
const wordTime = computed(() => {
  return ((wordCount.value / 275) * 60)
})

const imageTime = computed(() => {
  const n = imageCount.value
  if (imageCount.value <= 10) {
    // 等差数列求和
    return n * 13 + (n * (n - 1)) / 2
  }
  return 175 + (n - 10) * 3
})
const readTime = computed(() => {
  return Math.ceil((wordTime.value + imageTime.value) / 60)
})


function analyze() {
  document.querySelectorAll('.meta-des').forEach(v => v.remove())
  const docDomContainer = window.document.querySelector('#VPContent')
  const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
    '.content-container .main img'
  )
  imageCount.value = imgs?.length || 0
  const words = docDomContainer?.querySelector('.content-container .main')?.textContent || ''
  wordCount.value = countWord(words)
}

onMounted(() => {
  // 初始化时执行一次
  analyze()
})
</script>

<style scoped>
.articlemeta {
  padding-top: 12px;

  .h1 {
    font-size: 1.87rem;
    line-height: 2.25rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .meta {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    .date {
      font-size: 13px;
      line-height: 1.25rem;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      opacity: .5;
      margin: 0;
      margin-right: 10px;

      .svg {
        width: 14px;
        height: 14px;
        margin-right: 5px;
        flex-shrink: 0;
        fill: currentColor;
      }

      .time {
        flex-shrink: 0;
        margin-right: 10px;
      }
    }

    .tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;


      .tag {
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding: 0 8px;
        display: inline-block;
        background-color: rgba(123, 123, 123, .05);
        color: var(--vp-c-text-1);
        font-size: 12px;
        border-radius: 2px;
        /* .a {
          opacity: .6;
        } */
      }

      .tag:first-child {
        margin-left: 0px;
      }
    }
  }
}

.articlemeta.grid {
  .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    .tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .tag {
        margin-top: 5px;
        margin-bottom: 5px;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical !important
      }
    }
  }
}

.postlist .list .articlemeta.grid {
  .tags {
      flex-wrap: nowrap;
  }
}

.articlemeta.list {
  padding-top: 12px;

  .meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    .date {
      font-size: 13px;
      line-height: 1.25rem;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      opacity: .5;
      margin: 0;

      .svg {
        width: 14px;
        height: 14px;
        margin-right: 5px;
        flex-shrink: 0;
        fill: currentColor;
        display: none;
      }

      .time {
        flex-shrink: 0;
      }
    }

    /* .tags {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      margin-left: 10px;

      .tag {
        margin-left: 10px;
        padding: 0 8px;
        display: inline-block;
        background-color: rgba(123, 123, 123, .05);
        color: var(--vp-c-text-1);
        font-size: 12px;
        border-radius: 2px;
      }
    } */
  }
}

.readtime {
  margin-top: 20px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .warning {
    display: block;
    margin-left: 2px;
    border: 1px solid transparent;
    border-radius: 6px;
    padding: 0 16px;
    line-height: 33px;
    font-size: 13px;
    font-weight: 500;
    border-color: var(--vp-badge-warning-border);
    color: var(--vp-badge-warning-text);
    background-color: var(--vp-badge-warning-bg);
  }
}

.cover {
  .img {
    border-radius: 12px;
    border: 5px solid var(--vp-c-bg-alt);
    box-shadow: var(--vp-shadow-1);
  }
}

@media (max-width: 550px) {
  .articlemeta.grid,
  .articlemeta.list {
    .meta {
      display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .tag {
      margin-left: 0px!important;
      margin-right: 10px;
    }
    }
  }
}
</style>