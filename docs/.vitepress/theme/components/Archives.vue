<template>
    <!-- 存档页面。按年、月进行显示 -->
    <div class="wrap">
        <!-- {{ gooddata }} -->
        <div class="archives">
            <div class="archive" v-for="(item, name) in data">
                <div class="year"><a :href="withBase(`/?year=${name.toString()}`)"> {{ name.toString() }}</a></div>
                <div class="months">
                    <span class="month" v-for="(cell, key) in item">
                        <a class="a" :href="withBase(`/?year=${name.toString()}&month=${key.toString()}`)"> {{
                            key.toString() }}<strong class="VPBadge tip strong mini">{{ item[key].length }}</strong></a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { initArchives } from '../functions'
import { data as themeposts } from '../posts.data'
const data = computed(() => initArchives(themeposts))
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

.archives {
    display: flex;
    flex-direction: column;
    line-height: 24px;
}

.year {
    padding: 14px 0 8px 0;
    font-size: 15px;
    font-weight: 500;
    font-family: var(--date-font-family);
}

.month {
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
