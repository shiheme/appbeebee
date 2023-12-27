<template>
    <!-- 标签页 -->
    <div class="wrap">
        <div class="tags">
            <span class="tag" v-for="(item, key) in data">
                <a class="a" :href="withBase(`/?tag=${key.toString()}`)"> {{ '#' + key }}<strong class="VPBadge tip strong mini">{{
                    data[key].length }}</strong></a>
            </span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { initTags } from '../functions'
import { data as themeposts } from '../posts.data'
const data = computed(() => initTags(themeposts))
</script>

<style scoped>
.wrap {
    min-width: 300px;
    min-height: 100px;
    max-height: 40vh;
    max-width: 40vw;
    overflow-y: auto;
    padding: 20px;
}

.tags {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    line-height: 24px;
}

.tag {
    margin: 5px;
    padding: 0 8px;
    display: inline-block;
    background-color: rgba(123, 123, 123, .05);
    color: var(--vp-c-text-1);
    font-size: 12px;
    border-radius: 2px;
    line-height: 24px;

    .a {
        color: var(--vp-c-text-1);
        font-weight: 500;
        text-decoration: none;
    }

    .a:hover {
        color: var(--vp-c-brand);
    }
}
</style>
