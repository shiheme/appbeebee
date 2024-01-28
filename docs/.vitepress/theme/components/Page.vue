<template>
    <!-- 首页文章列表区域，对不同浏览器宽度做适配 -->
    <div class="postlist"
        :class="{ grid: listview === 'grid', list: listview === 'list', hasaside: frontmatter.aside, hassidebar: frontmatter.sidebar || theme?.sidebar?.length }">
        <template v-for="(article, index) in posts" :key="index">
            <div class="list" v-if="theme.website?.showUserCard &&Number(theme.website?.cardPosition)-2 < 0 && index ===0 && listview === 'grid'">
                <ClientOnly>
                    <PageASide type="articlelist" />
                </ClientOnly>
            </div>
            <div class="list">
                <ClientOnly>
                    <ArticleList :article="article" />
                </ClientOnly>
            </div>
            <div class="list" v-if="theme.website?.showUserCard &&index == Number(theme.website?.cardPosition)-2 && listview === 'grid'">
                <ClientOnly>
                    <PageASide type="articlelist" />
                </ClientOnly>
            </div>
        </template>
        <div class="list" v-if="theme.website?.showUserCard &&posts.length < Number(theme.website?.cardPosition)-1 && listview === 'grid'">
            <ClientOnly>
                <PageASide type="articlelist" />
            </ClientOnly>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'
import { useData, withBase } from 'vitepress'
import { useStorage } from '@vueuse/core'
const { theme, frontmatter } = useData();
const listview = useStorage('listview', 'grid')
const props = defineProps({
    posts: Array
})
</script>

<style scoped>
.postlist {
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
    .postlist {
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
}</style>