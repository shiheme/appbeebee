<template>
    <!-- 轮播 -->
    <swiper class="mySwiper" :navigation="true" :modules="modules">
    <swiper-slide>
        <a class="a" :href="withBase('/posts/2024/01/freebie-chinese-font.html')"><img class="image" src="https://fc.sinaimg.cn/large/6364aa43gy1hlxg58m6w3j21z40m8dis.jpg" /></a>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts" setup>
import { withBase } from 'vitepress'
import { Swiper, SwiperSlide } from 'swiper/vue';  //https://swiperjs.com/
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const modules = [Navigation]
</script>

<style scoped>
.mySwiper {
    height:200px;
    border-radius: 8px;
}
.image {
    display: block;
    width:100%;
    height:100%;
    object-fit: cover;
    /* background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: relative; */
    /* .a {
        position: absolute;
        width:100%;
        height:100%;
    } */
}
</style>