<template>
    <!-- 友情链接页 -->
    <div class="wrap">
        <div class="links">
            <span class="link" v-for="(item, key) in data">
                <a class="a" :href="item.url"><strong class="strong">{{ item.title }}</strong></a>
            </span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const data = ref([{
    title: '公众号',
    url: 'https://'
}])
</script>

<style scoped>
.wrap {
    width: 100%;
    margin-top: 16px;

    .links {
        background-color: var(--vp-c-bg-alt);
        border-radius: 8px;
        border: .5px solid var(--vp-c-gray-soft);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        position: relative;
    }

}

.link {
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
