<template>
    <!-- 页面底部版权信息。全站通用显示 -->
    <div class="site-footer">
        <div class="btmgroup">
            <div class="msgcard">
                <!-- <div class="gzh">
                    <PageGZH />
                </div> -->
                <div class="copyright" v-if="website?.showFooter">
                    Copyright © {{ new Date().getFullYear() === 2023 ? '' : '2023-' }}{{ new Date().getFullYear() }} <a
                        class="title strong" :href="website?.link">{{ webTitle }}</a> | 使用 vitepress 构建本站<br />
                    <a class="beian strong" target="_blank" v-if="website?.icpRecordCode"
                        href="https://beian.miit.gov.cn/">{{ website.icpRecordCode }}</a> <a class="beian strong"
                        target="_blank" v-if="website?.publicSecurityRecordCode"
                        href="https://beian.mps.gov.cn/#/query/webSearch">{{ website.publicSecurityRecordCode }}</a>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'

const { site, theme } = useData()
const website = theme.value.website
const webTitle = site.value.title
</script>

<style>
.site-footer {
    text-align: center;
    font-size: 0.75rem;
    width: 100%;
    padding: 15px 0;
    overflow: auto;
    max-width: calc(var(--vp-layout-max-width) - 64px);
    margin: 65px auto 0 auto;
    position: relative;
}

.btmgroup {
    max-width: 600px;
    margin: 0 auto;
}

.gzh {
    width: 224px;
}

.msgcard {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avacard {
    width: 224px;
}

.copyright {
    text-align: center;
}

.strong {
    color: var(--vp-c-text-1);
    font-weight: 700;
}
</style>
