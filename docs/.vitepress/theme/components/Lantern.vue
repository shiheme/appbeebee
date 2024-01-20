<template>
    <!-- 氛围组：灯笼 https://github.com/Doener48/firework -->
  <div v-if="theme?.website?.showLantern" class="dengbox" style="pointer-events: none;z-index: 1000;">
    <div :style="{
		left: 150+(20*index)+'px'
	}" class="deng-box" :class="'deng-box'+index" v-for="(item, index) in theme?.website?.lanternText" :key="index">
      <div class="deng" :class="index%2===0?'deng3':'deng5'">
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
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'
const { theme } = useData();

</script>
<style scoped>
.deng-box {
	  position: fixed;
	  top: -15px;
	  z-index: 9999;
	  pointer-events: none;
	  transform: scale(.5);transform-origin: top left;
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
