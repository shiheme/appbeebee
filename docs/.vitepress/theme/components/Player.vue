<template>
	<!-- 音乐播放器。由PageAside点击播放显示在头部，可拖拽 -->
	<div ref="el" class="player" :class="{ back: !isdrag }" :style="{
		background: 'var(--vp-c-bg-alt)',
		opacity: isPause ? 0 : 1,
		'pointer-events': isPause ? 'none' : 'auto',
		transform: 'translate(' + adjustedLeft + 'px,' + adjustedTop + 'px)'

	}">
		<div class="state repeatbg" :style="{
			transform: 'translateX(' + (currentLine) + '%)'
		}">
		</div>
		<div class="box">
			<div class="progress">
				<div class="playing" :class="{ on: !isPause }">
					<span class="playing__bar playing__bar1" />
					<span class="playing__bar playing__bar2" />
					<span class="playing__bar playing__bar3" />
				</div>

				<div class="name">
					{{ song.title }}
				</div>
				<div class="time" v-if="currentTime">
					{{ ' - ' + formatTime((duration - currentTime) * 1000, ('mm:ss')) }}
				</div>
			</div>

			<div class="btns" @click.stop="togglePlay">
				<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
					<path
						d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
						fill="currentColor"></path>
				</svg>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { computed, toRefs, ref } from 'vue'
import { useElementBounding } from '@vueuse/core'
import { formatTime } from '../functions'
import { usePlayerStore } from '../../store/player';

const { currentTime, duration, song, id, isPause, togglePlay, forward, backup, next, prev } = toRefs(usePlayerStore());

const currentLine = computed(() => {    // 实时监听当前进度条位置
	const val = duration.value / 100;    // 获取进度条单位长度
	const nowLine = (currentTime.value / val)
	return nowLine
})


const el = ref<HTMLElement | null>(null)
const { top, left } = useElementBounding(el)
const adjustedLeft = ref(0)
const adjustedTop = ref(0)
// useDraggable(el, {
//   initialValue: {
//     x: 0,
//     y: 0,
//   },
//   onMove({ x, y }) {
//     adjustedLeft.value = x - unref(left.value)
//     adjustedTop.value = y - unref(top.value)
//   },
// })   // H5端拖拽体验差故此隐藏，建议拖拽时增加一个屏幕容器不让滚动
const isdrag = ref(true)
const reback = () => {
	adjustedLeft.value = 0
	adjustedTop.value = 0
}
</script>

<style scoped>
.player.back {
	/* transform: translate(0px, 0px); */
	transition: .3s;
}

.player:hover {
	color: var(--vp-c-text-1);
	border: 1px solid var(--vp-c-brand-1);
	transition: color .5s;
	transition: border-color .25s;
}

.player {
	height: 40px;
	width: 200px;
	border-radius: 8px;
	color: var(--vp-c-text-2);
	font-weight: 500;
	transition: color .5s;
	transition: border-color .25s;
	border: 1px solid transparent;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 272;
	overflow: hidden;
	left: 0px;
	top: 0px;
	/* cursor: move; */

	.state {
		width: 100%;
		height: 100%;
		position: absolute;
		left: auto;
		top: 0;
		right: 100%;
		transition: transform .3s;
		background-color: var(--vp-c-gutter);
		z-index: 1;
	}

	.btns {
		/* position: relative; */
		width: 36px;
		height: 36px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		line-height: 1;
		cursor: pointer;

		.svg {
			width: 16px;
			object-fit: fill;
			fill: currentColor;
		}
	}

	.box {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		width: 100%;
		height: 100%;
		justify-content: space-between;
	}

	.progress {
		flex: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;

		.name {
			opacity: 1;
			font-size: 13px;
			margin: 0 5px 0 -5px;
			max-width: 70px;
			display: block;
			overflow: hidden;
			text-overflow: ellipsis;
			word-wrap: break-word;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical !important
		}

		.time {
			opacity: .6;
			font-size: 12px;
			width: 50px;
		}

		.slider {
			margin: 0 10px;
			width: 100%;
		}
	}
}

.playing {
	width: 42px;
	height: 35px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	box-sizing: border-box;
	transform: scale(.3);
	position: relative;
	overflow: hidden;
}

.playing__bar {
	position: absolute;
	display: inline-block;
	width: 5px;
	height: 100%;
	bottom: -110%;
	border-radius: 3px;
	background-color: var(--vp-c-text-2);

}

.playing.on .playing__bar {
	position: absolute;
	display: inline-block;
	width: 5px;
	height: 100%;
	bottom: -110%;
	border-radius: 3px;
	animation: up-and-down 1.3s ease infinite alternate;
	transform: translateZ(0);
	animation-fill-mode: forwards;
}

.playing__bar1 {
	left: 4px;
	transform: translateY(-85%);
}

.playing__bar2 {
	left: 20px;
	transform: translateY(-55%);
	animation-delay: -2.4s;
}

.playing.on .playing__bar2 {
	left: 20px;
	transform: translateY(-55%);
	animation-delay: -2.4s;
}

.playing__bar3 {
	left: 36px;
	transform: translateY(-100%);
	animation-delay: -3.7s;
}

.playing.on .playing__bar3 {
	left: 36px;
	transform: translateY(-100%);
	animation-delay: -3.7s;
}

@keyframes up-and-down {
	10% {
		transform: translateY(-30%);
	}

	30% {
		transform: translateY(-100%);
	}

	60% {
		transform: translateY(-50%);
	}

	80% {
		transform: translateY(-75%);
	}

	100% {
		transform: translateY(-20%);
	}
}


@media (max-width: 550px) {
	.player {
		position: fixed;
		left: auto;
		right: 32px;
		bottom: 32px;
		top: auto;
	}
}</style>