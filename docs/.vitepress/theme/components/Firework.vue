<template>
    <!-- 氛围组：烟花 https://github.com/Doener48/firework -->
    <div class="message" v-if="theme?.website?.showFirework"
    :style="{
        top:windowHeight - 144 +'px'
    }">
        <span class="span">{{ theme?.website?.fireworkTitle }}</span>
        <div class="msgwrap">
        <div class="messageleft">
            <input id="messageInput" placeholder="输入文字" :value="newyearwords" type="text" />
            <div class="voicectl" v-tooltip="'炮竹声开启'" @click="changebackvoice">
                <svg :style="{
                    display: !backvoice2 ? 'block' : 'none'
                }" class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M5.88889 16H2C1.44772 16 1 15.5523 1 15V9.00001C1 8.44772 1.44772 8.00001 2 8.00001H5.88889L11.1834 3.66815C11.3971 3.49329 11.7121 3.52479 11.887 3.73851C11.9601 3.82784 12 3.93971 12 4.05513V19.9449C12 20.221 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16ZM20.4142 12L23.9497 15.5355L22.5355 16.9498L19 13.4142L15.4645 16.9498L14.0503 15.5355L17.5858 12L14.0503 8.46447L15.4645 7.05026L19 10.5858L22.5355 7.05026L23.9497 8.46447L20.4142 12Z">
                    </path>
                </svg>
                <svg :style="{
                    display: backvoice2 ? 'block' : 'none'
                }" class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path
                        d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z">
                    </path>
                </svg>
            </div>
        </div>

        <button id="shootBtn" class="button">发射</button>
    </div>
    </div>
    <canvas id="mainCanvas"></canvas>
    <canvas id="letterCanvas" style="display: none"></canvas>
</template>
<script lang="ts" setup>
import { onMounted, watch, ref, computed } from 'vue'
import { useData, useRouter } from 'vitepress'
import { getRandomInt } from '../functions'
const { isDark,theme } = useData();
const newyearwordslist = theme.value?.website?.fireworkWords?theme.value.website.fireworkWords:[]
const newyearwords = ref(newyearwordslist[getRandomInt(newyearwordslist.length)])
const backvoice = ref(false)
const backvoice2 = computed(() => backvoice.value)

const windowHeight = ref(window.innerHeight)
const changebackvoice = () => {
    if (backvoice2.value) {
        backvoice.value = false
        soundManager.pauseAll();

    } else {
        backvoice.value = true
        soundManager.resumeAll();
    }

    console.log(backvoice.value)
}

const MyMath = (function MyMathFactory(Math) {

    const MyMath = {};


    // degree/radian conversion constants
    MyMath.toDeg = 180 / Math.PI;
    MyMath.toRad = Math.PI / 180;
    MyMath.halfPI = Math.PI / 2;
    MyMath.twoPI = Math.PI * 2;

    // Pythagorean Theorem distance calculation
    MyMath.dist = (width, height) => {
        return Math.sqrt(width * width + height * height);
    };

    // Pythagorean Theorem point distance calculation
    // Same as above, but takes coordinates instead of dimensions.
    // The language of this project was translated into Chinese by Nianbroken
    MyMath.pointDist = (x1, y1, x2, y2) => {
        const distX = x2 - x1;
        const distY = y2 - y1;
        return Math.sqrt(distX * distX + distY * distY);
    };

    // Returns the angle (in radians) of a 2D vector
    MyMath.angle = (width, height) => (MyMath.halfPI + Math.atan2(height, width));

    // Returns the angle (in radians) between two points
    // Same as above, but takes coordinates instead of dimensions.
    MyMath.pointAngle = (x1, y1, x2, y2) => (MyMath.halfPI + Math.atan2(y2 - y1, x2 - x1));

    // Splits a speed vector into x and y components (angle needs to be in radians)
    MyMath.splitVector = (speed, angle) => ({
        x: Math.sin(angle) * speed,
        y: -Math.cos(angle) * speed
    });

    // Generates a random number between min (inclusive) and max (exclusive)
    MyMath.random = (min, max) => Math.random() * (max - min) + min;

    // Generates a random integer between and possibly including min and max values
    MyMath.randomInt = (min, max) => ((Math.random() * (max - min + 1)) | 0) + min;

    // Returns a random element from an array, or simply the set of provided arguments when called
    MyMath.randomChoice = function randomChoice(choices) {
        if (arguments.length === 1 && Array.isArray(choices)) {
            return choices[(Math.random() * choices.length) | 0];
        }
        return arguments[(Math.random() * arguments.length) | 0];
    };

    // Clamps a number between min and max values
    MyMath.clamp = function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    };


    return MyMath;

})(Math);

const soundManager = {
    baseURL: '',
    ctx: new (window.AudioContext || window.webkitAudioContext),
    sources: {
        lift: {
            volume: 1,
            playbackRateMin: 0.85,
            playbackRateMax: 0.95,
            fileNames: [
                'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTk=', //lift1.mp3
                'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NjA=', //lift2.mp3
                'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NjE='  //lift3.mp3
            ]
        },
        burst: {
            volume: 1,
            playbackRateMin: 0.8,
            playbackRateMax: 0.9,
            fileNames: [
                'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTU=', //burst1.mp3
                'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTY=' //burst2.mp3
            ]
        },
        burstSmall: {
            volume: 0.25,
            playbackRateMin: 0.8,
            playbackRateMax: 1,
            fileNames: [
                'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTM=', //burst-sm-1.mp3
                'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTQ=' //burst-sm-2.mp3
            ]
        },
        crackle: {
            volume: 0.2,
            playbackRateMin: 1,
            playbackRateMax: 1,
            fileNames: ['https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTg='] //crackle1.mp3
        },
        crackleSmall: {
            volume: 0.3,
            playbackRateMin: 1,
            playbackRateMax: 1,
            fileNames: ['https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTc='] //crackle-sm-1.mp3
        }
    },

    preload() {
        const allFilePromises = [];

        function checkStatus(response) {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            const customError = new Error(response.statusText);
            customError.response = response;
            throw customError;
        }

        const types = Object.keys(this.sources);
        types.forEach(type => {
            const source = this.sources[type];
            const { fileNames } = source;
            const filePromises = [];
            fileNames.forEach(fileName => {
                const fileURL = this.baseURL + fileName;
                // Promise will resolve with decoded audio buffer.
                const promise = fetch(fileURL)
                    .then(checkStatus)
                    .then(response => response.arrayBuffer())
                    .then(data => new Promise(resolve => {
                        this.ctx.decodeAudioData(data, resolve);
                    }));

                filePromises.push(promise);
                allFilePromises.push(promise);
            });

            Promise.all(filePromises)
                .then(buffers => {
                    source.buffers = buffers;
                });
        });

        return Promise.all(allFilePromises);
    },

    pauseAll() {
        this.ctx.suspend();
    },

    resumeAll() {
        // Play a sound with no volume for iOS. This 'unlocks' the audio context when the user first enables sound.
        this.playSound('lift', 0);
        // Chrome mobile requires interaction before starting audio context.
        // The sound toggle button is triggered on 'touchstart', which doesn't seem to count as a full
        // interaction to Chrome. I guess it needs a click? At any rate if the first thing the user does
        // is enable audio, it doesn't work. Using a setTimeout allows the first interaction to be registered.
        // Perhaps a better solution is to track whether the user has interacted, and if not but they try enabling
        // sound, show a tooltip that they should tap again to enable sound.
        setTimeout(() => {
            this.ctx.resume();
        }, 250);
    },

    // Private property used to throttle small burst sounds.
    _lastSmallBurstTime: 0,

    /**
     * Play a sound of `type`. Will randomly pick a file associated with type, and play it at the specified volume
     * and play speed, with a bit of random variance in play speed. This is all based on `sources` config.
     *
     * @param  {string} type - The type of sound to play.
     * @param  {?number} scale=1 - Value between 0 and 1 (values outside range will be clamped). Scales less than one
     *                             descrease volume and increase playback speed. This is because large explosions are
     *                             louder, deeper, and reverberate longer than small explosions.
     *                             Note that a scale of 0 will mute the sound.
     */
    playSound(type, scale = 1) {
        // Ensure `scale` is within valid range.
        scale = MyMath.clamp(scale, 0, 1);

        // Disallow starting new sounds if sound is disabled, app is running in slow motion, or paused.
        // Slow motion check has some wiggle room in case user doesn't finish dragging the speed bar
        // *all* the way back.
        // if (!canPlaySoundSelector() || simSpeed < 0.95) {
        // 	return;
        // }

        // Throttle small bursts, since floral/falling leaves shells have a lot of them.
        if (type === 'burstSmall') {
            const now = Date.now();
            if (now - this._lastSmallBurstTime < 20) {
                return;
            }
            this._lastSmallBurstTime = now;
        }

        const source = this.sources[type];

        if (!source) {
            throw new Error(`Sound of type "${type}" doesn't exist.`);
        }

        const initialVolume = source.volume;
        const initialPlaybackRate = MyMath.random(
            source.playbackRateMin,
            source.playbackRateMax
        );

        // Volume descreases with scale.
        const scaledVolume = initialVolume * scale;
        // Playback rate increases with scale. For this, we map the scale of 0-1 to a scale of 2-1.
        // So at a scale of 1, sound plays normally, but as scale approaches 0 speed approaches double.
        const scaledPlaybackRate = initialPlaybackRate * (2 - scale);

        const gainNode = this.ctx.createGain();
        gainNode.gain.value = scaledVolume;

        const buffer = MyMath.randomChoice(source.buffers);
        const bufferSource = this.ctx.createBufferSource();
        bufferSource.playbackRate.value = scaledPlaybackRate;
        bufferSource.buffer = buffer;
        bufferSource.connect(gainNode);
        gainNode.connect(this.ctx.destination);
        bufferSource.start(0);
    }
};

const startcanvas = () => {
    interface Color {
        r: number;
        g: number;
        b: number;
        a: number;
    }
    class Vector {
        x: number;
        y: number;
        constructor(x: number = 0, y: number = 0) {
            this.x = x;
            this.y = y;
        }

        add(s: Vector) {
            this.x += s.x;
            this.y += s.y;
        }

        sub(s: Vector) {
            this.x -= s.x;
            this.y -= s.y;
        }

        scale(m: number) {
            this.x *= m;
            this.y *= m;
        }

        div(m: number) {
            this.x /= m;
            this.y /= m;
        }

        norm() {
            const m = Math.sqrt(this.x * this.x + this.y * this.y);
            this.x /= m;
            this.y /= m;
        }
    }

    let generalSettings = { bgAlpha: 1 };
    let rocketSettings = { size: 2, spawnRate: 1 }; //控制发射时的大小、数量
    let explosionSettings = { size:  2, fadeSpeed: 4, applyGravity: false }; //控制爆炸后的高斯模糊、大小、重力效果
    let wordSettings = { particleSize: 1, fadeSpeed: 0.3 };
    let canvaswidth = (window.innerWidth - (1500 - 64)) / 2 + 272 - 32;

    const canvas: any = document.getElementById("mainCanvas");
    const ctx: CanvasRenderingContext2D = canvas.getContext("2d");
    // window.addEventListener("resize", init, false);

    const textCanvas: any = document.getElementById("letterCanvas");
    const textCtx: CanvasRenderingContext2D = textCanvas.getContext("2d");

    const btn: any = document.getElementById("shootBtn");
    const textInput: HTMLInputElement = document.getElementById(
        "messageInput"
    ) as HTMLInputElement;
    btn.addEventListener("click", (e: Event) => {
        newyearwords.value = newyearwordslist[getRandomInt(newyearwordslist.length)]
        fireworks.push(new Firework(textInput.value))
    }
    );

    let bgcolor = ref({});

    const gravity = new Vector(0, 0.05);
    const fireworks: Firework[] = [];

    if (isDark.value) {
        bgcolor.value = { r: 22, g: 22, b: 24, a: 1 };
    } else {
        bgcolor.value = { r: 246, g: 246, b: 246, a: 1 };
    }

    let letterImageData;

    function init() {
        canvas.width = canvaswidth;
        canvas.height = window.innerHeight;
        ctx.fillStyle = 'transparent';
        ctx.fill();

        textCanvas.style.background = "white";
        textCanvas.width = canvaswidth;
        textCanvas.height = 150;
        // fireworks.push(new Firework("2024"));
        if (isDark.value) {
            bgcolor.value = { r: 22, g: 22, b: 24, a: 1 };
            fireworks.push(new Firework())
        } else {
            bgcolor.value = { r: 246, g: 246, b: 246, a: 1 };
            fireworks.push(new Firework())
        }
    }

    function generateTextParticles(text: string, offset: Vector, color: Color) {
        textCtx.fillStyle = "black";
        textCtx.font = "12px Verdana";
        textCtx.clearRect(0, 0, canvaswidth, 150);
        textCtx.fillText(text, 0, 30);
        letterImageData = textCtx.getImageData(0, 0, canvaswidth, 100);
        const letterParticles = [];
        for (let y = 0, y2 = letterImageData.height; y < y2; y++) {
            for (let x = 0, x2 = letterImageData.width; x < x2; x++) {
                if (
                    letterImageData.data[y * 4 * letterImageData.width + x * 4 + 3] > 128
                ) {
                    const ptemp = new Particle(
                        new Vector(),
                        new Vector(),
                        new Vector(),
                        wordSettings.particleSize,
                        color,
                        new Vector(
                            x * 3 + offset.x - text.length * 18,
                            y * 3 + offset.y - 100
                        )
                    );
                    ptemp.pos = new Vector(offset.x, offset.y);
                    letterParticles.push(ptemp);
                }
            }
        }
        return letterParticles;
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.rect(0, 0, canvaswidth, window.innerHeight);
        ctx.fillStyle = `rgba(${bgcolor.value?.r},${bgcolor.value?.g},${bgcolor.value?.b},1)`;
        ctx.fill();
        if (Math.random() <= rocketSettings.spawnRate / 100) {
            soundManager.playSound('burstSmall');
            fireworks.push(new Firework());

        }
        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].draw();
            if (fireworks[i].exploded && fireworks[i].particles.length == 0) {
                fireworks.splice(i, 1);
            }
        }
    }
    class Particle {
        pos: Vector;
        vel: Vector;
        acc: Vector;
        size: number;
        color: Color;
        homePos: Vector;

        constructor(
            pos: Vector = new Vector(
                canvaswidth / 2 + ((Math.random() - 0.5) * canvaswidth) / 6,
                window.innerHeight
            ),
            vel: Vector = new Vector((Math.random() - 0.5) * 1, Math.random() * -2 - 6),
            acc: Vector = new Vector(),
            size: number = rocketSettings.size,
            color = {
                r: Math.random() * 255,
                g: Math.random() * 255,
                b: Math.random() * 255,
                a: 1,
            },
            homePos: Vector = pos
        ) {
            this.pos = pos;
            this.vel = vel;
            this.acc = acc;
            this.size = size;
            this.color = color;
            this.homePos = homePos;

            this.draw();
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${this.color.b},${this.color.a})`;
            ctx.fill();
        }

        update() {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.scale(0);


        }

        fade(x: number) {
            if (this.color.a > 0) {
                this.color.a -= 0.0001 * x;
            }
        }

        applyForce(force: Vector) {

            this.acc.add(force);
        }

        steerToHome() {
            const dvec = new Vector(
                this.homePos.x - this.pos.x,
                this.homePos.y - this.pos.y
            );
            const distanceFromHome = Math.sqrt(dvec.x * dvec.x + dvec.y * dvec.y);
            if (distanceFromHome > 0) {

                dvec.norm();
                dvec.scale(Math.random() * 4);
                this.vel = dvec;
            }
        }
    }

    class Firework {
        rocket: Particle;
        particles: Particle[];
        exploded: boolean;
        text: string;

        constructor(text?: string) {
            this.particles = [];
            this.exploded = false;
            this.rocket = new Particle();
            this.text = text;
        }

        update() {

            if (!this.exploded) {

                this.rocket.applyForce(gravity);
                this.rocket.update();
                if (this.rocket.vel.y > 0) {
                    this.explode();
                }
            } else {
                for (let i = this.particles.length - 1; i >= 0; i--) {

                    let fader = explosionSettings.fadeSpeed;
                    if (this.text) {
                        fader = (1 - this.text.length / 50) / 2 * wordSettings.fadeSpeed;
                        this.particles[i].steerToHome();
                    }
                    if (explosionSettings.applyGravity) {
                        this.particles[i].applyForce(gravity);
                    }
                    this.particles[i].update();
                    this.particles[i].fade(fader);
                    if (this.particles[i].color.a <= 0) {
                        this.particles.splice(i, 1);
                    }
                }
            }
        }

        draw() {
            if (!this.exploded) {
                this.rocket.draw();
            } else {
                for (let i = 0; i < this.particles.length; i++) {
                    this.particles[i].draw();
                }
            }
        }

        explode() {
            this.exploded = true;

            if (this.text) {
                const letter = generateTextParticles(
                    this.text,
                    new Vector(this.rocket.pos.x, this.rocket.pos.y),
                    this.rocket.color
                );
                this.particles = letter;
            } else {
                for (let i = 0; i < 50; i++) {
                    const vx = (Math.random() - 0.5) * 7;
                    const vy = (Math.random() - 0.5) * 7;
                    this.particles.push(
                        new Particle(
                            new Vector(this.rocket.pos.x, this.rocket.pos.y),
                            new Vector(vx, vy),
                            new Vector(),
                            explosionSettings.size,
                            this.rocket.color
                        )
                    );
                }
            }
            const soundx = ['burst', 'lift']
            soundManager.playSound(soundx[getRandomInt(soundx.length)]);
        }
    }
    init();
    animate();
}

watch(
    isDark,
    (val) => {
        startcanvas()
    }
)
onMounted(() => {
    if(theme.value?.website?.showFirework){
    soundManager.preload()
    startcanvas()
}
})

</script>
<style scoped>
#mainCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.message {
    position: sticky;z-index: 100;bottom:0px;margin-top: 40px;margin-bottom: -40px;
    bottom: 0px;
    width: 100%;
    height:40px;
    
    /* margin-bottom: 2rem; */

    .span {
        position: absolute;
        bottom: 100%;
        font-size: 12px;
        opacity: .8;

        .a {
            color: var(--vp-c-brand);
        }
    }
}

.msgwrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}

.messageleft {
    position: relative;
    overflow: hidden;
    background-color: var(--vp-c-bg-elv);
    border-radius: 0.25rem;

    .voicectl {
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        opacity: .4;
        transition: .3s;

        .svg {
            width: 14px;
            height: 14px;
        }
    }
    .voicectl:hover {
        opacity: 1;
    }
}

#messageInput {
    background-color: var(--vp-c-bg-elv);
    padding: 0.5rem;

}

.button {
    background-color: var(--vp-c-bg-elv);
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0 2px #00000004;
    animation: jump 0s;
    color: var(--vp-c-brand);
    margin-left: 8px;
    flex-shrink: 0;
    width: 43px;
}

.button:hover {
    animation-duration: 1s;
}

.button:active {
    animation: none;
}

@keyframes jump {
    from {
        transform: scale3d(1, 1, 1)
    }

    10%,
    20% {
        transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)
    }

    30%,
    50%,
    70%,
    90% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)
    }

    40%,
    60%,
    80% {
        transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)
    }

    to {
        transform: scale3d(1, 1, 1)
    }
}
</style>
