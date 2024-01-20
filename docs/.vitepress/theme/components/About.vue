<template>
    <!-- 关于页面 -->
    <div class="about">
        <div class="desc">
            <p>这是一个非常素雅的技术型分享博客，基于 vitepress 开发。</p>

            <p>主要整理分享前端大牛们的开源作品和付费作品。</p>
            <p>包括：vue3+ts开源项目、小程序开源作品、AIGC开源项目、对开发有帮助的设计源文件等</p>

            <p>所有作品版权归原作者所有。</p>
            <p>本站不对作品的完整性、可用性和时效性负责。</p>
        </div>
        <div class="list">
            <h4 class="h4">-- 信息 --</h4>
            <ul class="ul">
                <li class="li"><label class="label">博主</label><span>小鱼哥</span></li>
                <li class="li"><label class="label">程序</label><span>Vitepress</span></li>
                <li class="li"><label class="label">图标</label><span>remixicon</span></li>
                <li class="li"><label class="label">音乐</label><span>来源网络</span></li>
                <li class="li"><label class="label">图片</label><span>根据作品体验生成</span></li>
                <li class="li"><label class="label">主题</label><span>比比原创</span></li>
                <li class="li"><label class="label">内容</label><span>比比原创</span></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.about {
    background-color: var(--vp-c-bg-alt);
    border-radius: 8px;
    padding: 40px;
    font-size: 14px;
    text-align: center;

    .list {
        font-size: 12px;
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-content: center;

        .h4 {
            margin: 10px;
            font-size: 12px;
        }

        .ul {
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0 auto;

            .li {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                .label {
                    margin-right: 8px;
                }
            }
        }
    }
}</style>
