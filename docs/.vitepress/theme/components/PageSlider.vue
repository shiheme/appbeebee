<template>
    <!-- <div class="newyearcard">
        <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjY4NDM3MQ==&mid=2247484735&idx=1&sn=ada2866d75923961740976ff83508bab&chksm=ce465983f931d09529b05480982c2563b4f12964bf03aa8b8a1f11ad302b224f9a4fa6a1e353&scene=178&cur_album_id=2990480834551906308#rd" target="_blank" class="a"></a>
        <div class="contain">
            <div class="dengbox" style="pointer-events: none;z-index: 1000;">
                <div :style="{
                    left: 5 + (2 * index) + '%'
                }" class="deng-box" :class="'deng-box' + index" v-for="(item, index) in lanternText" :key="index">
                    <div class="deng" :class="index % 2 === 0 ? 'deng3' : 'deng5'">
                        <div class="xian"></div>
                        <div class="deng-a">
                            <div class="deng-b">
                                <div class="deng-t">{{ item }}</div>
                            </div>
                        </div>
                        <div class="shui shui-a">
                            <div class="shui-c"></div>
                            <div class="shui-b"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="timedown">
                <p class="title">比比除夕送福利，红包、小程序通通有</p>
                <p class="desc">2024年2月9日（除夕） 20:00开奖，另有群内红包发放</p>
                <div>
                    <Countdown :until="until" />
                </div>
                <button class="tolink"><span class="span">前往抽奖</span><svg class="svf" width="15" height="15"
                        viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg></button>
            </div>
            <div class="redcover">

            </div>
        </div>
    </div> -->
    <!-- 这是一个非常简易的轮播 -->
    <swiper :style="{
        '--swiper-navigation-color': '#ffffff',
        '--swiper-pagination-color': 'var(--vp-c-brand)',
        height: theme?.website?.bannerHeight + 'px'
    }" class="mySwiper" :loop="true" :spaceBetween="10" :navigation="true" :modules="modules"
        v-if="theme?.website?.homeBanner && list.length">
        <swiper-slide v-for="(item, index) in list" :key="index">
            <a class="a" :href="item?.link"><img class="image" :src="item?.image" :alt="item?.title" /></a>
        </swiper-slide>
    </swiper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import { Swiper, SwiperSlide } from 'swiper/vue';  //轮播插件。更多高级配置教程见https://swiperjs.com/
import { Navigation } from 'swiper/modules';
import Countdown from "../../theme/components/Countdown.vue";
import 'swiper/css';
import 'swiper/css/navigation';
const { theme } = useData();
const modules = [Navigation]
const list = ref(theme.value?.banner ? theme.value.banner : [])

const lanternText = ref(['新', '年'])
const defaultDate = '2024/02/09 20:00'

function getUntilDate() {
    const param = new URL(location.href).searchParams.get('until') || defaultDate
    if (/\d{8}/.test(param))
        return `${param.substring(0, 4)}/${param.substring(4, 6)}/${param.substring(6, 8)}`
    return defaultDate
}

const until = getUntilDate()
</script>

<style scoped>
.mySwiper {
    height: 400px;
    border-radius: 8px;
    margin-bottom: 32px;
    padding: 0;
}

.image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.newyearcard:hover {
    .tolink {
        color: var(--vp-c-brand-1);
    }
}

.newyearcard {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 32px;
    padding: 0;
    /* background-color: #EA4444; */
    position: relative;

    .a {
        position: absolute;
        width:100%;
        height:100%;
        left:0;
        top:0;
        z-index: 30;
    }


    .contain {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 20;
    }

    .dengbox {
        .deng-box {
            position: absolute;
            top: -15px;
            z-index: 10;
            pointer-events: none;
            transform: scale(.5);
            transform-origin: top left;
        }

        .deng {
            position: relative;
            width: 120px;
            height: 90px;
            margin: 50px;
            background: #d8000f;
            background: rgba(216, 0, 15, .8);
            border-radius: 50% 50%;
            transform-origin: 50% -100px;
            box-shadow: -5px 5px 50px 4px #fa6c00
        }

        .deng3 {
            animation: swing 3s infinite ease-in-out;
        }

        .deng5 {
            animation: swing 5s infinite ease-in-out;
        }

        .deng-a {
            width: 100px;
            height: 90px;
            background: #d8000f;
            background: rgba(216, 0, 15, .1);
            margin: 12px 8px 8px 8px;
            border-radius: 50% 50%;
            border: 2px solid #dc8f03
        }

        .deng-b {
            width: 45px;
            height: 90px;
            background: #d8000f;
            background: rgba(216, 0, 15, .1);
            margin: -4px 8px 8px 26px;
            border-radius: 50% 50%;
            border: 2px solid #dc8f03
        }

        .xian {
            position: absolute;
            top: -20px;
            left: 60px;
            width: 2px;
            height: 20px;
            background: #dc8f03
        }

        .shui-a {
            position: relative;
            width: 5px;
            height: 20px;
            margin: -5px 0 0 59px;
            animation: swing 4s infinite ease-in-out;
            transform-origin: 50% -45px;
            background: orange;
            border-radius: 0 0 5px 5px
        }

        .shui-b {
            position: absolute;
            top: 14px;
            left: -2px;
            width: 10px;
            height: 10px;
            background: #dc8f03;
            border-radius: 50%
        }

        .shui-c {
            position: absolute;
            top: 18px;
            left: -2px;
            width: 10px;
            height: 35px;
            background: orange;
            border-radius: 0 0 0 5px
        }

        .deng:before {
            position: absolute;
            top: -7px;
            left: 29px;
            height: 12px;
            width: 60px;
            content: " ";
            display: block;
            z-index: 999;
            border-radius: 5px 5px 0 0;
            border: solid 1px #dc8f03;
            background: orange;
            background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03)
        }

        .deng:after {
            position: absolute;
            bottom: -7px;
            left: 10px;
            height: 12px;
            width: 60px;
            content: " ";
            display: block;
            margin-left: 20px;
            border-radius: 0 0 5px 5px;
            border: solid 1px #dc8f03;
            background: orange;
            background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03)
        }

        .deng-t {
            font-family: 黑体, Arial, Lucida Grande, Tahoma, sans-serif;
            font-size: 3.2rem;
            color: #dc8f03;
            font-weight: 700;
            line-height: 85px;
            text-align: center
        }


    }

    .timedown {
        width: 65%;
        margin: 0px auto;
        /* color: #FDF1E0; */
        text-align: center;
        position: relative;
        z-index: 20;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        .title {
            font-weight: 700;
            font-size: 2.08rem;
            line-height: 1.1;
            letter-spacing: -.05em;
        }

        .desc {
            font-size: 1.2rem;
            line-height: 1.75rem;
            opacity: .8;
        }

        .tolink {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-top: 5px;

            .svg {
                width: 1rem;
                height: 1rem;
                margin-left: 0.25rem;
            }
        }
    }
}

@-moz-keyframes swing {
    0% {
        -moz-transform: rotate(-10deg)
    }

    50% {
        -moz-transform: rotate(10deg)
    }

    100% {
        -moz-transform: rotate(-10deg)
    }
}

@-webkit-keyframes swing {
    0% {
        -webkit-transform: rotate(-10deg)
    }

    50% {
        -webkit-transform: rotate(10deg)
    }

    100% {
        -webkit-transform: rotate(-10deg)
    }
}

</style>