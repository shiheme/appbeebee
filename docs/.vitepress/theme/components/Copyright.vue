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
    <p id="result"></p> <!-- 用户复制操作时进行添加预制文本 -->
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useData } from 'vitepress'

const { site, theme, frontmatter } = useData()
const website = theme.value?.website?theme.value.website:'https://appbeebee.com/'
const webTitle = site.value?.title?site.value.title:'比比工房'
const webAuthor = theme.value?.article?.cc?.author?theme.value.article.cc.author:'小鱼哥'

onMounted(() => {
    document.addEventListener('copy', function (event) {
        let clipboardData = event.clipboardData || window?.clipboardData;
        if (!clipboardData) { return; }
        let text = window?.getSelection().toString();
        let join = "\n\n作者：" + webAuthor + "\n链接：" + decodeURI(window.location.href) + "\n来源：" + webTitle + "\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\n";
        if (text) {
            event.preventDefault();
            clipboardData.setData('text/plain', text + join);
            document.querySelector('#result').innerText = text + join;
        }
    });
});
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
