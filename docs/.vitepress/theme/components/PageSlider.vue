<template>
    <!-- 这是一个非常简易的轮播 -->
    <swiper :style="{
        '--swiper-navigation-color': '#ffffff',
        '--swiper-pagination-color': 'var(--vp-c-brand)',
    }" class="mySwiper" :loop="true" :spaceBetween="10" :navigation="true" :modules="modules" v-if="list.length">
        <swiper-slide v-for="(item, index) in list" :key="index">
            <a class="a" :href="item?.link"><img class="image" :src="item?.image" :alt="item?.title" /></a>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import { Swiper, SwiperSlide } from 'swiper/vue';  //轮播插件。更多高级配置教程见https://swiperjs.com/
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const { theme } = useData();
const modules = [Navigation]
const list = ref(theme.value?.banner ? theme.value.banner : [])
</script>

<style scoped>
.mySwiper {
    height: 200px;
    border-radius: 8px;
    margin-bottom: 32px;
}

.image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>