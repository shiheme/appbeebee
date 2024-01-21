<template>
    <!-- 通用 carousel组件 -->
    <div class="customcomp">
        <div class="f-carousel" id="myCarousel">
            <div class="f-carousel__slide" data-fancybox="gallery" :data-src="item.image" :data-thumb-src="item.image"
                v-for="(item, index) in list" :key="index"><img class="image" :src="item.image" :alt="item.title" /></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted,nextTick } from 'vue'

import { Carousel as NativeCarouselbox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/carousel/carousel.css';

import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';
const props = defineProps<{
  list?: any
}>();
onMounted(() => {
    nextTick(() => {
        new NativeCarouselbox(
            document.getElementById('myCarousel'),
            {
                Dots: false,
                transition: 'slide',
                Thumbs: {
                type: 'classic',
                },
            },
            { Thumbs }
        );
    });
});

</script>

<style>
.customcomp {
    margin-bottom: 32px;
}
.f-carousel__thumbs {
    --f-thumb-width: 96px;
    --f-thumb-height: 72px;
    --f-thumb-outline: 2px!important;
    --f-thumb-outline-color: var(--vp-c-brand);
    --f-thumb-opacity: 1;
    --f-thumb-hover-opacity: 1;
    --f-thumb-selected-opacity: 1;
    --f-thumb-border-radius: 2px;
    --f-thumb-offset: 0px;
    --f-button-next-pos: 0;
    --f-button-prev-pos: 0;
}
.f-carousel {
    --f-thumb-outline:10px!important;
    /* --f-carousel-slide-height: 60%; */
    --f-carousel-spacing: 10px;
    border-radius: 8px;
    
}
.f-carousel__slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>