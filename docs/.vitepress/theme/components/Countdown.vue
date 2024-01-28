<template>
    <!-- 倒计时 -->
    <div ref="clock" :style="{ marginTop: '16px' }">
        <p class="time">
            {{ remainingFormatted }}
        </p>
    </div>
</template>
  
<script setup lang="ts">
import dayjs from 'dayjs'
import { computed, ref } from 'vue'
import { useElementSize, useNow, useWindowSize } from '@vueuse/core'
import { durationTime } from '../functions'

const { until } = defineProps<{
    until: string
}>()

const clock = ref<HTMLDivElement>()
const { height: windowHeight } = useWindowSize()
const { height: clockHeight } = useElementSize(clock)
const clockTop = computed(() => `${200 / 2 - clockHeight.value / 2}px`)

const now = useNow()
const untilDayjs = dayjs(until)

const duration = computed(() => {
    if (untilDayjs.isBefore(now.value))
        return durationTime(0)

    return durationTime(untilDayjs.diff(now.value))
})

const untilFormatted = untilDayjs.format('YYYY/MM/DD')
const remainingFormatted = computed(() => {
    const dur = duration.value

    // Make days sized 2 at least.
    let days = String(Math.floor(dur.asDays()))
    if (days.length === 1)
        days = `0${days}`

    const hms = dur.format('HH[h] mm[m] ss[s]')
    return `${days}d ${hms}`
})
</script>

<style scoped>
p {
    margin: 0;
    padding: 0;
    line-height: 2rem;
    /* color: #daf6ff; */
}

.time {
    font-size: 1.2rem;
    font-weight: 700;
    font-family: "Share Tech Mono", monospace;
    text-align: center;
    background: var(--vp-c-bg-alt);
    overflow: hidden;
    padding: 5px;
    color: var(--vp-c-brand-1);
    border-radius: 10px;
}

.remaining {
    font-size: 1.5rem;
}

.until {
    font-size: 1rem;
}

@media (max-width: 950px) {
    .time {
        font-size: 2rem;
    }

    .until {
        font-size: 0.88rem;
    }
}

@media (max-width: 600px) {
    p {
        line-height: 2rem;
    }

    .time {
        font-size: 1.25rem;
    }

    .remaining {
        font-size: 0.88rem;
    }

    .until {
        font-size: 0.62rem;
    }
}
</style>