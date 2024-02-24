<template>
  <!-- 文章内页底下的文章版权声明。 -->
  <section style="letter-spacing: 0.544px;text-align: center;opacity: 0.5;font-size: 12px;margin-bottom: 20px;"><span>-
      END -</span></section>
  <div class="articlecc">
    <svg class="cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M9 8C10.1045 8 11.1049 8.44836 11.829 9.17297L10.4153 10.5865C10.0533 10.2241 9.55298 10 9 10 7.89502 10 7 10.895 7 12 7 13.105 7.89502 14 9 14 9.55249 14 10.0525 13.7762 10.4144 13.4144L11.828 14.828C11.104 15.552 10.104 16 9 16 6.79199 16 5 14.208 5 12 5 9.79199 6.79199 8 9 8ZM18.829 9.17297C18.1049 8.44836 17.1045 8 16 8 13.792 8 12 9.79199 12 12 12 14.208 13.792 16 16 16 17.104 16 18.104 15.552 18.828 14.828L17.4144 13.4144C17.0525 13.7762 16.5525 14 16 14 14.895 14 14 13.105 14 12 14 10.895 14.895 10 16 10 16.553 10 17.0533 10.2241 17.4153 10.5865L18.829 9.17297ZM2 12C2 6.47717 6.47717 2 12 2 17.5228 2 22 6.47717 22 12 22 17.5228 17.5228 22 12 22 6.47717 22 2 17.5228 2 12ZM12 4C7.58167 4 4 7.58167 4 12 4 16.4183 7.58167 20 12 20 16.4183 20 20 16.4183 20 12 20 7.58167 16.4183 4 12 4Z"
        fill="currentColor"></path>
    </svg>
    <ul class="ul">
      <li class="li"><label class="label">作者</label><span class="span"><a class="a" target="_blank" :href="theme?.article?.cc?.authorLink">{{
        frontmatter?.author ? frontmatter?.author : theme?.article?.cc?.author }}</a></span></li>
      <li class="li"><label class="label">标题</label><span class="span">{{ frontmatter?.title }}</span></li>
      <li class="li"><label class="label">时间</label><span class="span">{{ formatTime(frontmatter?.date) }}</span></li>
      <li class="li link" @click="handleCopy(articleLink)"><label class="label">链接</label><span v-tooltip="'点击复制'" class="span">{{ articleLink }}</span></li>
      <li class="li" v-if="theme?.article?.cc?.licenseLink"><label class="span label">版权</label><span class="span"><a class="a"
            target="_blank" :href="theme?.article?.cc?.licenseLink">{{ theme?.article?.cc?.license }}</a></span></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted, nextTick, watch } from 'vue'
import md5 from 'blueimp-md5';
import { withBase, useData } from 'vitepress';
import { formatTime,handleCopy } from '../functions'
import { findViewsById } from "../../models/views";
import type { View } from '../../theme/types';
const { theme, page, frontmatter } = useData();
// const articleLink = decodeURI(window.location.href);
const articleLink = page.value.relativePath;

console.log('page',page)
// const currentId = md5(frontmatter?.date)


// const updateviews =async ()=> {
//   await findViewsById(currentId);
// }

// onMounted(() => {
//   nextTick(() => {
//     try {
//       updateviews()
//     } catch (e) {
//       console.log("gen cover failed: ", e);
//     }
//   });
// });
</script>

<style scoped>
.articlecc {
  width: 100%;
  position: relative;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-elv);
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;

  .cc {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 15px;
    top: 15px;
  }

  .ul {
    display: flex;
    flex-direction: column;
    font-size: 13px;
    padding: 16px;
    font-size: 12px;

    .li {
      line-height: 1.5rem;

      .label {
        margin-right: 8px;
        font-weight: 600;
      }

      .a {
        color: var(--vp-c-brand);
      }

      .a:hover {
        color: var(--vp-c-brand);
        text-decoration: underline;
      }
    }

    .li.link {
      .span {
        color: var(--vp-c-brand);
        cursor: pointer;
      }
    }
  }
}</style>