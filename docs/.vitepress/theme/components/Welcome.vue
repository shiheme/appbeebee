<template>
    <!-- 首页右下角弹层，可放广告、欢迎语等。使用sessionStorage缓存 -->
    <div class="welcome">
        <div class="acontain">
            <h3 class="h3"> 15 秒广告赞助 </h3>
            <div class="acontent">啥？比比轻壁纸小程序年底降价啦？多少？19.9？没错！点我了解～</div>
            <div class="button"><a href="" class="a">去投放广告</a></div>
        </div>
        <button class="close" @click="dismissAll"><svg class="svg" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                    d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                    fill="currentColor"></path>
            </svg></button>
    </div>
</template>

<script lang="ts" setup>
import { toast, type ToastOptions } from 'vue3-toastify';
const dismissAll = () =>  toast.clearAll(); 
</script>

<style scoped>
.welcome {
    position: relative;
    /* width: 288px; */
    height: 150px;

    .acontain {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 100%;

        .h3 {
            font-size: 12px;
        }

        .acontent {
            margin-top: 10px;
        }

        .button {
            /* background-color: #ffffff; */
            /* padding: 4px 5px; */
            /* border-radius: 5px; */
            /* color: #000000; */
            /* margin-top: 10px; */
            font-size: 12px;
            text-align: right;

            display: flex;
            flex-direction: row;
            justify-content: flex-end;

            .a {
                opacity: .4;
                transition: .3s;
            }

            .a:hover {
                opacity: 1;
                transition: .3s;
            }
        }
    }


    .close {
        position: absolute;
        top: 0px;
        right: 0px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .svg {
            margin-right: 5px;
            width: 16px;
            height: 16px;
        }
    }
}
</style>
