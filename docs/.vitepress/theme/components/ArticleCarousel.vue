<template>
    <!-- 通用 carousel组件 -->
    <div class="customcomp">
        <swiper :style="{
            '--swiper-navigation-color': '#ffffff',
            '--swiper-pagination-color': 'var(--vp-c-brand)',
        }" :loop="true" :spaceBetween="10" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules"
            class="mySwiper2">
            <swiper-slide v-for="(item, index) in list" :key="index"><img data-fancybox="gallery" class="image"
                    :src="item.image" :alt="item.title" /></swiper-slide>
        </swiper>
        <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="8" :freeMode="true"
            :watchSlidesProgress="true" :modules="modules" class="mySwiper">
            <swiper-slide v-for="(item, index) in list" :key="index"><img class="thumb" :src="item.image"
                    :alt="item.title" /></swiper-slide>
        </swiper>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const modules = [FreeMode, Navigation, Thumbs]
const props = defineProps<{
    list?: any
}>();

</script>

<style>
.customcomp {
    margin-bottom: 32px;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 80%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;

    .thumb {
        cursor: pointer;
    }
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;

    .thumb {
        border-radius: 5px;
        border-width: 2px;
    }
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;

    .thumb {
        border-radius: 5px;
        border-width: 2px;
        border-color: var(--vp-c-brand);
    }
}

.swiper-slide .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>