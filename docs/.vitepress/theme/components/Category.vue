<template>
    <div class="tags">
        <span @click="toggleCat(key)" v-for="(item, key) in data" class="tag">
            {{ key }} <strong>{{ data[key].length }}</strong>
        </span>
    </div>
   

    <!-- <div class="pagination">
        <a
            class="link"
            :class="{ active: pageCurrent === i }"
            v-for="i in pagesNum"
            :key="i"
            :href="withBase(i === 1 ? '/index.html' : `/page_${i}.html`)"
        >{{ i }}</a>
    </div> -->
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import { initCats } from '../functions'
import {data as themeposts} from '../posts.data'
let url = location.href.split('?')[1]
let params = new URLSearchParams(url)
const { theme } = useData()
const data = computed(() => initCats(themeposts))
let selectCat = ref(params.get('category') ? params.get('category') : '')
// let total = data.value[selectCat].length
// let i = 0
// const pageSize = 1
// const posts = data.value[selectCat.value].slice(pageSize * (i - 1),pageSize * i)
const toggleCat = (cat: string) => {
    selectCat.value = cat
}
</script>

<style scoped>
.post-list {
    border-bottom: 1px dashed var(--vp-c-divider-light);
    padding: 14px 0 14px 0;
}
.post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post-title {
    font-size: 1.125rem;
    font-weight: 500;
    margin: 0.1rem 0;
}
.post-info {
    font-size: 12px;
}
.post-info span {
    display: inline-block;
    padding: 0 8px;
    background-color: var(--vp-c-bg-alt);
    margin-right: 10px;
    transition: 0.4s;
    border-radius: 2px;
    color: var(--vp-c-text-1);
}
.describe {
    font-size: 0.9375rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    color: var(--vp-c-text-2);
    margin: 10px 0;
    line-height: 1.5rem;
}
.pagination {
    margin-top: 16px;
    display: flex;
    justify-content: center;
}
.link {
    display: inline-block;
    width: 24px;
    text-align: center;
    border: 1px var(--vp-c-divider-light) solid;
    border-right: none;
    font-weight: 400;
}
.link.active {
    background: var(--vp-c-text-1);
    color: var(--vp-c-neutral-inverse);
    border: 1px solid var(--vp-c-text-1) !important;
}
.link:first-child {
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
}
.link:last-child {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    border-right: 1px var(--vp-c-divider-light) solid;
}

@media screen and (max-width: 768px) {
    .post-list {
        padding: 14px 0 14px 0;
    }
    .post-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .post-title {
        font-size: 1.0625rem;
        font-weight: 400;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        width: 17rem;
    }
    .describe {
        font-size: 0.9375rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        margin: 0.5rem 0 1rem;
    }
}
</style>
