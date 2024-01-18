<template>
    <!-- 轮播 -->
    <vueper-slides class="no-shadow" fixedHeight="200px" :visible-slides="1"
  :arrows="false"
  :slide-ratio="1 / 4"
  :gap="3">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :link="slide.link" :style="'border-radius:8px'">
        </vueper-slide>
    </vueper-slides>
</template>

<script lang="ts" setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const slides = [
    {
        image: 'https://fc.sinaimg.cn/large/6364aa43gy1hlxg58m6w3j21z40m8dis.jpg',
        link: 'http://localhost:5001/posts/2024/01/freebie-chinese-font.html'
    }
]
</script>

<style scoped>
.feed {
    text-align: center;

    .main {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid transparent;
        border-radius: 8px;
        padding: 0 10px 0 12px;
        width: 50%;
        height: 40px;
        background-color: var(--vp-c-bg-alt);
        font-size: 14px;
        margin: 40px auto;


        .label {
            background-color: var(--vp-c-bg-alt);
            flex-shrink: 0;
            padding-right: 10px;
        }

        .copy {
            flex-shrink: 0;
            padding-left: 10px;
            color: var(--vp-c-brand);
            cursor: pointer;
        }

        .ads {
            overflow-x: auto;
            flex: 1;
            text-align: left;
        }
    }

    .main:hover {
        color: var(--vp-c-text-1);
        border: 1px solid var(--vp-c-brand-1);
        transition: color .5s;
        transition: border-color .25s;
    }

    .a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        line-height: 20px;

        .svg {
            width: 20px;
            height: 20px;
            margin-right: 3px;
        }
    }

    .reeder {
        width: 90%;
        margin: 20px auto;
        border-radius: 12px;
        border: 5px solid var(--vp-c-bg-alt);
        box-shadow: var(--vp-shadow-1);
    }
}
</style>