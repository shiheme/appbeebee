<template>
  <!-- 首页顶栏菜单 -->
  <div class="mainnavi top" v-if="type==='top'">
  
    <ul class="ul">
      <li class="li pc">
        <VDropdown :distance="6" :placement="'bottom'">
          <button class="tags a"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM13.7327 10.5855C14.5137 11.3666 15.78 11.3666 16.5611 10.5855C17.3421 9.80448 17.3421 8.53815 16.5611 7.7571C15.78 6.97606 14.5137 6.97606 13.7327 7.7571C12.9516 8.53815 12.9516 9.80448 13.7327 10.5855Z" fill="currentColor"></path></svg>标签</button>
          <template #popper>
            <Tags />
          </template>
        </VDropdown>
      </li>
      <li class="li pc">
        <VDropdown :distance="6" :placement="'bottom'">
          <button class="archives a"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 10H21V20.0044C21 20.5543 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5552 3 20.0044V10ZM9 12V14H15V12H9ZM2 3.99981C2 3.44763 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44372 22 3.99981V8H2V3.99981Z" fill="currentColor"></path></svg>存档</button>
          <template #popper>
            <Archives />
          </template>
        </VDropdown>
      </li>
      <li class="li h5" @click="choose('tags')"
        :class="{ on: (page.relativePath == 'pages/tags.md' && selected === '') || selected === 'tags' }">
        <a class="a" :href="withBase(`/pages/tags`)"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.9042 2.10025L20.8037 3.51446L22.2179 13.414L13.0255 22.6063C12.635 22.9969 12.0019 22.9969 11.6113 22.6063L1.71184 12.7069C1.32131 12.3163 1.32131 11.6832 1.71184 11.2926L10.9042 2.10025ZM13.7327 10.5855C14.5137 11.3666 15.78 11.3666 16.5611 10.5855C17.3421 9.80448 17.3421 8.53815 16.5611 7.7571C15.78 6.97606 14.5137 6.97606 13.7327 7.7571C12.9516 8.53815 12.9516 9.80448 13.7327 10.5855Z" fill="currentColor"></path></svg>标签</a>
      </li>
      <li class="li h5" @click="choose('archives')"
        :class="{ on: (page.relativePath == 'pages/archives.md' && selected === '') || selected === 'archives' }"><a
          class="a" :href="withBase(`/pages/archives`)"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 10H21V20.0044C21 20.5543 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5552 3 20.0044V10ZM9 12V14H15V12H9ZM2 3.99981C2 3.44763 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44372 22 3.99981V8H2V3.99981Z" fill="currentColor"></path></svg>存档</a></li>
    </ul>
  </div>
  <!-- 左侧边栏菜单 -->
  <div class="mainnavi left" v-else>
    <!-- <h4 class="h4"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M4 5H20V3H4V5ZM20 9H4V7H20V9ZM3 11H10V13H14V11H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V11ZM16 13V15H8V13H5V19H19V13H16Z"
          fill="currentColor"></path>
      </svg>分类</h4> -->
    <ul class="ul">
      <li class="li" @click="choose('home')"
        :class="{ on: (page.relativePath == 'index.md' && selected === '' && !params.get('category') && !params.get('tag')) || selected === 'home' }">
        <a class="a" :href="withBase(`/`)">首页</a>
      </li>
      <li class="li" @click="choose(key.toString())"
        :class="{ on: (params.get('category') === key.toString() && selected === '') || selected === key.toString() }"
        v-for="(item, key) in data"><a class="a" :href="withBase(`/?category=${key.toString()}`)">{{ key }}<strong
            class="VPBadge tip strong mini">{{ data[key].length }}</strong></a></li>
    </ul>
    <h4 class="h4"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M22 20V7L20 3H4L2 7.00353V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20ZM4 9H20V19H4V9ZM5.236 5H18.764L19.764 7H4.237L5.236 5ZM15 11H9V13H15V11Z"
          fill="currentColor"></path>
      </svg>其他</h4>
    <ul class="ul">
      <li class="li" @click="choose('feed')"
        :class="{ on: (page.relativePath == 'pages/feed.md' && selected === '') || selected === 'feed' }">
        <a class="a" :href="withBase(`/pages/feed`)"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M3 3C12.9411 3 21 11.0589 21 21H18C18 12.7157 11.2843 6 3 6V3ZM3 10C9.07513 10 14 14.9249 14 21H11C11 16.5817 7.41828 13 3 13V10ZM3 17C5.20914 17 7 18.7909 7 21H3V17Z"
              fill="currentColor"></path>
          </svg>订阅更新</a>
      </li>
      <li class="li" @click="choose('tools')"
        :class="{ on: (page.relativePath == 'pages/tools.md' && selected === '') || selected === 'tools' }"><a class="a"
          :href="withBase(`/pages/tools`)"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M4.96488 5.09625L8.5107 17.5066L11.5514 11.4253L17.188 9.17062L4.96488 5.09625ZM2.89945 2.29958L21.7052 8.56818C21.9672 8.6555 22.1088 8.93866 22.0215 9.20063C21.975 9.34016 21.8694 9.45214 21.7328 9.50676L13.0002 12.9998L8.57501 21.8501C8.45151 22.0971 8.15118 22.1972 7.90419 22.0737C7.77883 22.011 7.68553 21.8986 7.64703 21.7639L2.26058 2.91129C2.18472 2.64577 2.33846 2.36903 2.60398 2.29316C2.70087 2.26548 2.80386 2.26772 2.89945 2.29958Z"
              fill="currentColor"></path>
          </svg>书签导航</a></li>
          <li class="li" @click="choose('about')"
        :class="{ on: (page.relativePath == 'pages/about.md' && selected === '') || selected === 'about' }"><a class="a"
          :href="withBase(`/pages/about`)"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 13V5H6V13C6 14.1046 6.89543 15 8 15H14C15.1046 15 16 14.1046 16 13ZM5 3H20C21.1046 3 22 3.89543 22 5V8C22 9.10457 21.1046 10 20 10H18V13C18 15.2091 16.2091 17 14 17H8C5.79086 17 4 15.2091 4 13V4C4 3.44772 4.44772 3 5 3ZM18 5V8H20V5H18ZM2 19H20V21H2V19Z" fill="currentColor"></path></svg>关于本站</a></li>
      <!-- <li class="li" @click="choose('tools')"
        :class="{ on: (page.relativePath == 'tools/index.md' && selected === '') || selected === 'tools' }"><a class="a"
          :href="withBase(`/pages/post`)"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
              fill="currentColor"></path>
          </svg>作品投稿</a></li>
      <li class="li" @click="choose('tools')"
        :class="{ on: (page.relativePath == 'tools/index.md' && selected === '') || selected === 'tools' }"><a class="a"
          :href="withBase(`/pages/links`)"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M13.0607 8.11097L14.4749 9.52518C17.2086 12.2589 17.2086 16.691 14.4749 19.4247L14.1214 19.7782C11.3877 22.5119 6.95555 22.5119 4.22188 19.7782C1.48821 17.0446 1.48821 12.6124 4.22188 9.87874L5.6361 11.293C3.68348 13.2456 3.68348 16.4114 5.6361 18.364C7.58872 20.3166 10.7545 20.3166 12.7072 18.364L13.0607 18.0105C15.0133 16.0578 15.0133 12.892 13.0607 10.9394L11.6465 9.52518L13.0607 8.11097ZM19.7782 14.1214L18.364 12.7072C20.3166 10.7545 20.3166 7.58872 18.364 5.6361C16.4114 3.68348 13.2456 3.68348 11.293 5.6361L10.9394 5.98965C8.98678 7.94227 8.98678 11.1081 10.9394 13.0607L12.3536 14.4749L10.9394 15.8891L9.52518 14.4749C6.79151 11.7413 6.79151 7.30911 9.52518 4.57544L9.87874 4.22188C12.6124 1.48821 17.0446 1.48821 19.7782 4.22188C22.5119 6.95555 22.5119 11.3877 19.7782 14.1214Z"
              fill="currentColor"></path>
          </svg>
          友情链接</a></li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initCats } from '../functions'
import { data as themeposts } from '../posts.data'
let url = window.location.href.split('?')[1]
let params = new URLSearchParams(url)
const { page } = useData()
const data = computed(() => initCats(themeposts))
const props = defineProps<{
  type?: string
}>();
const selected = ref('')
const choose = (e: string) => {
  selected.value = e
}

</script>

<style scoped>
.h4 {

  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 12px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .svg {
    width: 14px;
    height: 14px;
    margin-right: 5px;
    fill: currentColor;
    display:none;
  }
}

.tags,
.archives {
  padding: 0;
  /* color: #ffffff; */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 44px;
  line-height: 1;
  transform: translateX(0px);
  transition: .3s;
}

.mainnavi.left {
  margin-top: 20px;
  /* background-color: var(--vp-c-gray-1); */
  width: 80%;
  border-radius: 16px;
  font-size: 14px;

  .ul {

    display: flex;
    flex-direction: column;
    padding: 10px 0;

    .li {
      /* padding: 0 10px; */
      /* margin: 0 10px; */
      /* border-bottom: 1px solid var(--vp-c-divider); */

      .a {
        padding: 0;
        /* color: #ffffff; */
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 44px;
        font-size: 14px;
        line-height: 1;
        transform: translateX(0px);
        transition: .3s;
        width: 100%;
        cursor: pointer;
      }

      .svg {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        fill: currentColor
      }

      .a:hover {
        /* color: #ffffff; */
        transform: translateX(10px);
        transition: .3s;
      }
    }

    .li.pc {
      display: none;
    }

    .li.h5 {
      display: block;
    }

    .li:last-child {
      /* border-bottom: none; */
    }

    .li.on .a {
      font-weight: bold;
    }
  }
}

.mainnavi.top {
  margin-bottom: 32px;
  /* background-color: var(--vp-c-gray-1); */
  width: 100%;
  border-radius: 16px;
  font-size: 14px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  .ul {

    display: flex;
    flex-direction: row;
    padding: 10px 0;

    .li {
      padding: 0 10px;
      margin: 0 10px;
      /* border-bottom: 1px solid var(--vp-c-divider); */

      .a {
        padding: 0;
        /* color: #ffffff; */
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 44px;
        font-size: 14px;
        line-height: 1;
        transform: translateX(0px);
        transition: .3s;
        width: 100%;
      }

      .svg {
        width: 16px;
        height: 16px;
        margin-right: 5px;
        fill: currentColor
      }

      .a:hover {
        /* color: #ffffff; */
        /* transform: translateX(10px); */
        transition: .3s;
        color: var(--vp-c-brand);
      }
    }

    .li.pc {
      display: none;
    }

    .li.h5 {
      display: block;
    }

    .li:last-child {
      border-bottom: none;
    }

    .li.on .a {
      font-weight: bold;
      color: var(--vp-c-brand);
    }
  }
}

@media (min-width: 960px) {

  .mainnavi.top,
  .mainnavi.left {

    .ul {
      .li.pc {
        display: block;
      }

      .li.h5 {
        display: none;
      }
    }
  }
}
</style>