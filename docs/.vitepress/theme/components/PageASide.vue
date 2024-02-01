<template>
  <!-- 首页以及 404 页面模块调用。一个CSS卡通名片，带动画交互 -->
  <div class="pageaside">
    <div class="notfoundarea" v-if="type === 'page404'">
      <p class="code">404</p>
      <p>糟糕！页面不见了～</p>
    </div>
    <div class="acontent" :style="{
      'padding-bottom': type !== 'articlelist' ? '220px' : '122px'
    }">
      <div class="authorarea" :class="{ happy: !isPause }">
        <div class="author">
          <div class="avator" :class="{ pay: pay }" v-tooltip="talkword">
            <div class="light"></div>
            <div class="pods" v-if="!isPause"></div>
            <div class="eyesContainer">
              <div class="eyes ani">
                <div class="pupil" :style="{
                  left: movementx + '%',
                  top: movementy + '%',
                  transform: 'translate(-' + movementx + '%, -' + movementy + '%)'
                }">
                </div>
              </div>
              <div class="eyes ani">
                <div class="pupil" :style="{
                  left: movementx + '%',
                  top: movementy + '%',
                  transform: 'translate(-' + movementx + '%, -' + movementy + '%)'
                }">
                </div>
              </div>
              <div class="eyelid"></div>
              <div class="eyelid"></div>
            </div>
            <div class="coffee" v-if="pay">

              <svg width="26.6518281px" height="38.5822903px" viewBox="0 0 26.6518281 38.5822903" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g fill-rule="nonzero">
                    <path
                      d="M14.2577677,17.8230583 C12.8718677,18.4163583 11.2991677,19.0890583 9.26086767,19.0890583 C8.40816767,19.0873583 7.55956767,18.9703583 6.73826767,18.7412583 L8.14796767,33.2150583 C8.19786767,33.8198583 8.47346767,34.3839583 8.92006767,34.7952583 C9.36656767,35.2062583 9.95146767,35.4342583 10.5584677,35.4342583 C10.5584677,35.4342583 12.5572677,35.5382583 13.2242677,35.5382583 C13.9421677,35.5382583 16.0945677,35.4342583 16.0945677,35.4342583 C16.7015677,35.4342583 17.2862677,35.2062583 17.7326677,34.7952583 C18.1791677,34.3836583 18.4546677,33.8198583 18.5045677,33.2150583 L20.0144677,17.2209583 C19.3396677,16.9905583 18.6587677,16.8374577 17.8910677,16.8374577 C16.5633677,16.8368583 15.4935677,17.2941583 14.2577677,17.8230583 L14.2577677,17.8230583 Z"
                      fill="#FFDD00"></path>
                    <path
                      d="M26.5329677,10.3121583 L26.3206677,9.24135829 C26.1301677,8.28065829 25.6977677,7.37285829 24.7115677,7.02555829 C24.3954677,6.91445829 24.0368677,6.86675829 23.7944677,6.63685829 C23.5520677,6.40685829 23.4803677,6.04975829 23.4243677,5.71865829 C23.3205677,5.11075829 23.2229677,4.50245829 23.1165677,3.89575829 C23.0246677,3.37405829 22.9520677,2.78805829 22.7127677,2.30955829 C22.4013677,1.66695829 21.7550677,1.29115829 21.1124677,1.04255829 C20.7832677,0.919558294 20.4472677,0.815658294 20.1060677,0.731058294 C18.5006677,0.307558294 16.8127677,0.151858294 15.1610677,0.0630582944 C13.1787677,-0.0463417056 11.1910677,-0.0133417056 9.21336767,0.161658294 C7.74126767,0.295558294 6.19086767,0.457558294 4.79206767,0.966758294 C4.28086767,1.15305829 3.75396767,1.37675829 3.36526767,1.77175829 C2.88816767,2.25705829 2.73246767,3.00765829 3.08076767,3.61285829 C3.32836767,4.04255829 3.74776767,4.34625829 4.19256767,4.54715829 C4.77196767,4.80595829 5.37706767,5.00285829 5.99786767,5.13465829 C7.72626767,5.51675829 9.51646767,5.66665829 11.2822677,5.73055829 C13.2393677,5.80955829 15.1996677,5.74555829 17.1474677,5.53905829 C17.6291677,5.48605829 18.1099677,5.42255829 18.5899677,5.34855829 C19.1551677,5.26185829 19.5179677,4.52275829 19.3513677,4.00785829 C19.1520677,3.39225829 18.6163677,3.15345829 18.0106677,3.24635829 C17.9213677,3.26035829 17.8326677,3.27335829 17.7433677,3.28635829 L17.6790677,3.29565829 C17.4737677,3.32165829 17.2685677,3.34585829 17.0634677,3.36835829 C16.6395677,3.41405829 16.2146677,3.45145829 15.7886677,3.48045829 C14.8346677,3.54695829 13.8780677,3.57755829 12.9219677,3.57905829 C11.9824677,3.57905829 11.0424677,3.55265829 10.1050677,3.49085829 C9.67736767,3.46285829 9.25066767,3.42715829 8.82506767,3.38395829 C8.63146767,3.36365829 8.43836767,3.34245829 8.24536767,3.31855829 L8.06156767,3.29515829 L8.02156767,3.28945829 L7.83106767,3.26195829 C7.44186767,3.20325829 7.05256767,3.13585829 6.66736767,3.05435829 C6.62856767,3.04565829 6.59376767,3.02415829 6.56886767,2.99305829 C6.54396767,2.96195829 6.53036767,2.92335829 6.53036767,2.88355829 C6.53036767,2.84375829 6.54396767,2.80515829 6.56886767,2.77405829 C6.59376767,2.74305829 6.62856767,2.72145829 6.66736767,2.71275829 L6.67466767,2.71275829 C7.00846767,2.64165829 7.34476767,2.58095829 7.68216767,2.52805829 C7.79456767,2.51035829 7.90736767,2.49305829 8.02056767,2.47615829 L8.02366767,2.47615829 C8.23496767,2.46205829 8.44726767,2.42425829 8.65746767,2.39925829 C10.4863677,2.20905829 12.3261677,2.14415829 14.1640677,2.20515829 C15.0562677,2.23115829 15.9479677,2.28355829 16.8360677,2.37385829 C17.0270677,2.39355829 17.2170677,2.41435829 17.4070677,2.43775829 C17.4796677,2.44655829 17.5528677,2.45695829 17.6260677,2.46575829 L17.7734677,2.48705829 C18.2032677,2.55105829 18.6307677,2.62875829 19.0560677,2.72005829 C19.6861677,2.85705829 20.4953677,2.90175829 20.7756677,3.59205829 C20.8649677,3.81105829 20.9054677,4.05455829 20.9546677,4.28445829 L21.0175677,4.57775829 C21.0191677,4.58295829 21.0203677,4.58835829 21.0211677,4.59385829 C21.1695677,5.28585829 21.3182677,5.97795829 21.4670677,6.67005829 C21.4779677,6.72115829 21.4781677,6.77395829 21.4677677,6.82515829 C21.4573677,6.87645829 21.4365677,6.92495829 21.4064677,6.96775829 C21.3765677,7.01055829 21.3379677,7.04675829 21.2933677,7.07405829 C21.2487677,7.10125829 21.1990677,7.11905829 21.1472677,7.12625829 L21.1431677,7.12625829 L21.0522677,7.13875829 L20.9625677,7.15065829 C20.6780677,7.18765829 20.3932677,7.22225829 20.1081677,7.25445829 C19.5465677,7.31845829 18.9840677,7.37385829 18.4207677,7.42055829 C17.3013677,7.51365829 16.1796677,7.57475829 15.0557677,7.60375829 C14.4830677,7.61905829 13.9105677,7.62615829 13.3381677,7.62505829 C11.0600677,7.62325829 8.78396767,7.49085829 6.52106767,7.22855829 C6.27606767,7.19945829 6.03106767,7.16825829 5.78606767,7.13665829 C5.97606767,7.16105829 5.64796767,7.11795829 5.58156767,7.10865829 C5.42586767,7.08685829 5.27016767,7.06415829 5.11436767,7.04065829 C4.59176767,6.96225829 4.07216767,6.86565829 3.55046767,6.78105829 C2.91986767,6.67725829 2.31676767,6.72915829 1.74626767,7.04065829 C1.27806767,7.29685829 0.899067672,7.68975829 0.659967672,8.16695829 C0.413867672,8.67565829 0.340767672,9.22945829 0.230667672,9.77605829 C0.120667672,10.3225583 -0.0506323277,10.9106583 0.0142676723,11.4717583 C0.153867672,12.6826583 1.00046767,13.6667583 2.21816767,13.8868583 C3.36366767,14.0944583 4.51546767,14.2626583 5.67026767,14.4059583 C10.2069677,14.9615583 14.7901677,15.0279583 19.3409677,14.6041583 C19.7115677,14.5695583 20.0816677,14.5318583 20.4512677,14.4910583 C20.5666677,14.4783583 20.6834677,14.4916583 20.7930677,14.5299583 C20.9027677,14.5682583 21.0023677,14.6306583 21.0847677,14.7124583 C21.1672677,14.7942583 21.2302677,14.8934583 21.2693677,15.0027583 C21.3084677,15.1121583 21.3226677,15.2288583 21.3107677,15.3443583 L21.1955677,16.4644583 C20.9633677,18.7278583 20.7311677,20.9910583 20.4989677,23.2541583 C20.2567677,25.6306583 20.0129677,28.0070583 19.7676677,30.3831583 C19.6984677,31.0524583 19.6292677,31.7215583 19.5600677,32.3903583 C19.4935677,33.0491583 19.4842677,33.7285583 19.3591677,34.3794583 C19.1619677,35.4032583 18.4689677,36.0312583 17.4578677,36.2612583 C16.5315677,36.4722583 15.5852677,36.5832583 14.6352677,36.5912583 C13.5821677,36.5972583 12.5295677,36.5502583 11.4763677,36.5562583 C10.3520677,36.5622583 8.97506767,36.4592583 8.10726767,35.6222583 C7.34476767,34.8872583 7.23936767,33.7363583 7.13556767,32.7411583 C6.99716767,31.4238583 6.85996767,30.1067583 6.72396767,28.7897583 L5.96096767,21.4665583 L5.46736767,16.7281583 C5.45906767,16.6497583 5.45076767,16.5724583 5.44296767,16.4935583 C5.38376767,15.9282583 4.98356767,15.3749583 4.35296767,15.4035583 C3.81316767,15.4273583 3.19966767,15.8862583 3.26296767,16.4935583 L3.62886767,20.0064583 L4.38566767,27.2731583 C4.60126767,29.3371583 4.81626767,31.4015583 5.03086767,33.4663583 C5.07236767,33.8618583 5.11126767,34.2585583 5.15486767,34.6542583 C5.39206767,36.8152583 7.04266767,37.9802583 9.08666767,38.3082583 C10.2804677,38.5002583 11.5033677,38.5392583 12.7148677,38.5592583 C14.2678677,38.5842583 15.8363677,38.6442583 17.3639677,38.3622583 C19.6275677,37.9472583 21.3258677,36.4362583 21.5682677,34.0914583 C21.6374677,33.4144583 21.7066677,32.7375583 21.7758677,32.0603583 C22.0059677,29.8207583 22.2357677,27.5810583 22.4651677,25.3412583 L23.2156677,18.0226583 L23.5598677,14.6685583 C23.5769677,14.5022583 23.6471677,14.3458583 23.7601677,14.2225583 C23.8730677,14.0992583 24.0226677,14.0155583 24.1868677,13.9839583 C24.8340677,13.8577583 25.4527677,13.6423583 25.9131677,13.1498583 C26.6460677,12.3655583 26.7919677,11.3430583 26.5329677,10.3121583 L26.5329677,10.3121583 Z M2.18486767,11.0357583 C2.19476767,11.0310583 2.17656767,11.1156583 2.16876767,11.1551583 C2.16726767,11.0954583 2.17036767,11.0424583 2.18486767,11.0357583 Z M24.1567677,11.5532583 C23.9241677,11.7743583 23.5738677,11.8771583 23.2276677,11.9285583 C19.3451677,12.5046583 15.4060677,12.7963583 11.4810677,12.6676583 C8.67196767,12.5716583 5.89246767,12.2596583 3.11136767,11.8667583 C2.83886767,11.8283583 2.54356767,11.7784583 2.35616767,11.5776583 C2.00326767,11.1987583 2.17656767,10.4357583 2.26846767,9.97795829 C2.35256767,9.55855829 2.51346767,8.99955829 3.01226767,8.93985829 C3.79086767,8.84845829 4.69496767,9.17705829 5.46526767,9.29385829 C6.39266767,9.43535829 7.32346767,9.54865829 8.25776767,9.63375829 C12.2450677,9.99715829 16.2993677,9.94055829 20.2690677,9.40905829 C20.9925677,9.31175829 21.7135677,9.19885829 22.4319677,9.07015829 C23.0719677,8.95535829 23.7814677,8.73995829 24.1681677,9.40285829 C24.4333677,9.85435829 24.4686677,10.4585583 24.4276677,10.9687583 C24.4150677,11.1910583 24.3178677,11.4001583 24.1562677,11.5532583 L24.1567677,11.5532583 Z"
                      fill="#0D0C22"></path>
                  </g>
                </g>
              </svg>
            </div>

          </div>
          <div class="nickname"><a :href="theme?.article?.cc?.authorLink" target="_blank">博主：{{ theme?.article?.cc?.author
          }}</a></div>
        </div>
        <div class="social">
          <ul class="ul">
            <template v-if="theme.website?.cardMusic">
              <li class="li" v-if="isPause" @click="togglePlay">

                <div class="group">
                  <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"
                      fill="currentColor"></path>
                  </svg>播放音乐<span class="VPBadge warning strong mini">新年歌</span>
                </div>
              </li>
              <li class="li" v-else @click="togglePlay">
                <div class="group">
                  <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z" fill="currentColor"></path>
                  </svg>停止音乐
                </div>
              </li>
            </template>
            <template v-if="theme.website?.cardCoffee">
              <li class="li" @click="coffeepay" style="position: relative;">
                <div v-if="pay" class="specialpop"
                  style="position: absolute; left:50%;top:0;transform: translate3d(-50%, -100px, 0px);">
                  <div class="v-popper__backdrop"></div>
                  <div class="v-popper__wrapper">
                    <div class="v-popper__inner">
                      <div
                        style="width:100px;height:100px;border-radius: 4px;overflow: hidden;background-color: #ffffff;">
                        <img v-if="theme?.website?.coffeeQrcode" :src="theme.website?.coffeeQrcode" />
                      </div>
                    </div>
                    <div class="v-popper__arrow-container" style="top: 14px;">
                      <div class="v-popper__arrow-outer"></div>
                      <div class="v-popper__arrow-inner"></div>
                    </div>
                  </div>
                </div>
                <div class="group" v-if="!pay"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M14 2H6.20495C5.6091 2 5.09608 2.42057 4.97923 3.00485L4.1802 7H2V9H4.10875L5.48105 20.8933C5.55383 21.524 6.08789 22 6.72281 22H17.2772C17.9121 22 18.4462 21.524 18.5189 20.8933L19.8912 9H22V7H19.8198L19.0208 3.00485C18.9039 2.42057 18.3909 2 17.795 2H16V0H14V2ZM17.7802 7H6.2198L6.8198 4H17.1802L17.7802 7ZM6.12202 9H17.878L16.6088 20H7.39125L6.12202 9Z">
                    </path>
                  </svg>打赏咖啡</div>
                <div class="group" v-else>
                  <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"
                      fill="currentColor"></path>
                  </svg>微信扫码
                </div>
              </li>
            </template>
          </ul>
        </div>
        <div class="total" v-if="type !== 'articlelist'">
          <div class="cell views">
            <strong class="strong">9999+</strong>
            <span class="span">访问</span>
          </div>
          <div class="cell posts">
            <strong class="strong">{{ totalArticles.length }}</strong>
            <span class="span">内容</span>
          </div>
          <div class="cell publish">
            <strong class="strong">+{{ monthArticles.length }}</strong>
            <span class="span">月发布</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, toRefs } from 'vue'
import { useData } from 'vitepress';
import { usePlayerStore } from '../../store/player';
import type { Song } from '../../theme/types';
import { data as themeposts } from '../posts.data'
const { theme, frontmatter } = useData();
const { pushPlayList } = usePlayerStore();
const {
  togglePlay,
  isPause
} = toRefs(usePlayerStore());
const songList = ref<Song[]>();
songList.value = theme.value?.music ? theme.value.music : [];
pushPlayList(true, ...songList.value);
const props = defineProps<{
  type?: string
}>();
const talkword = ref('听歌让我快乐')
const movementx = ref(50)
const movementy = ref(50)
const pay = ref(false)

const coffeepay = () => {
  pay.value = !pay.value
}

const totalArticles = computed(() => {
  return themeposts.filter((article: any) =>
    article?.frontmatter?.publish !== false
  )
})
const nowMonth = new Date().getMonth()
const nowYear = new Date().getFullYear()
const monthArticles = computed(() => {
  return totalArticles.value.filter((article: any) => {
    const pubDate = new Date(article?.frontmatter?.date)
    return pubDate?.getMonth() === nowMonth && pubDate.getFullYear() === nowYear
  })
})


onMounted(() => {
  // 当鼠标移动进行监听
  window.addEventListener("mousemove", function (event: any) {
    movementx.value = event.clientX * 100 / window.innerWidth;
    movementy.value = event.clientY * 100 / window.innerHeight;
    if (movementy.value < 40) {
      movementy.value = 40
    }
  })
})
</script>

<style scoped>
.total {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 16px;
  margin-bottom: 16px;
  border-top: 1px solid var(--vp-c-gray-soft);

  .cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .strong {
      font-size: 1.1rem;
      font-family: "Share Tech Mono", monospace;
    }

    .span {
      font-size: 0.618rem;
    }
  }
}

.notfoundarea {
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.5;

  .code {
    font-size: 2rem;
  }

  margin-bottom: 50px;
}

.pageaside {
  /* min-height: 315px; */
  width: 100%;

  .acontent {
    background-color: var(--vp-c-bg-alt);
    border-radius: 8px;
    border: .5px solid var(--vp-c-gray-soft);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 66%;
    padding-bottom: 122px;
    position: relative;
  }
}

.authorarea {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  width: 194px;
  margin: 0px auto;

  .social {
    width: 80%;
    font-size: 12px;
    margin: 0 auto;


    .ul {
      display: flex;
      flex-direction: column;
      padding: 10px 0;

      .li {

        padding: 5px 10px;
        margin: 0 10px;
        transition: all .5s ease;
        cursor: pointer;

        .group {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          position: relative;

          .strong {
            position: absolute;
            left: 100%;
            word-break: keep-all;
            transform: translate(-25px, -5px) scale(0.8);
            top: 0;
          }
        }

        .svg {
          width: 14px;
          object-fit: fill;
          fill: currentColor;
          margin-right: 8px;
        }
      }

      .li:hover {
        color: var(--vp-c-brand-1);
        transition: all .5s ease;
      }
    }
  }

  .author {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px 24px;
    padding-top: 8px;
    position: relative;

    .coffee {
      position: absolute;
      bottom: 10px;
      left: 0;
      transform: scale(1.6);
    }

    .avator.pay {
      transform: translate(0px, -10px) scale(.7);
      transform-origin: center center;
      transition: .3s;
    }

    .avator {
      width: 100%;
      height: 0;
      padding-top: 100%;
      background-color: #dddddd;
      border: 2px solid #dcdcdc;
      border-radius: 50%;
      box-sizing: content-box;
      position: relative;
      transform: scale(.8);
      transition: .3s;

      .pods {
        position: absolute;
        top: 0;
        left: 50%;
        width: 100%;
        z-index: 10;
        width: 180px;
        height: 100px;
        border: 8px solid #de6745;
        border-bottom: 0px;
        border-top-left-radius: 110px;
        border-top-right-radius: 110px;
        transform: translate(-50%, -5px) scale(.8);
        transform-origin: top center;
      }

      .pods:before,
      .pods:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: -20px;
        width: 23px;
        height: 40px;
        background-color: #5fab84;
        border-radius: 10px;
        transform: rotate(8deg);
      }

      .pods:before {
        right: -18px;
        left: auto;
        transform: rotate(-8deg);
      }
    }

    .nickname {
      margin-top: 10px;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      -webkit-font-smoothing: antialiased;
      font-weight: 500;
      overflow-wrap: normal;
      word-break: normal;
    }
  }
}

.eyesContainer {
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%) scale(0.3);
  transform-origin: center center;
  position: absolute;
  left: 50%;
  top: 50%
}

.eyes {
  position: absolute;
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 50px;
  left: 25%;
  top: 40%;
  pointer-events: none;
}

.eyes+.eyes {
  left: 55%;
}

.light {
  border-radius: 50%;
  box-sizing: content-box;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}

.light::after {
  content: '';
  background-color: #dddddd;
  border-radius: 50%;
  box-sizing: content-box;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transform: translate(5px, -5px);
}

.pupil {
  position: relative;
  width: 25px;
  height: 25px;
  background: #000000;
  border-radius: 12px;
  left: 50%;
  top: 50%;
  margin: -12px 0 0 -12px;
  transition: all .2s ease;
}

.eyelid {
  width: 150px;
  height: 100px;
  position: absolute;
  left: 20%;
  top: 25%;
  pointer-events: none;
  background: #dddddd;
  animation-name: blink;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-delay: .5s;
  transition: all .5s ease;
}

.eyelid+.eyelid {
  left: 50%;
}

/* Blinking eyes */
@-webkit-keyframes blink {
  0% {
    top: 25%;
  }

  95% {
    top: 25%;
  }

  100% {
    top: 40%;
  }
}

/* hover events */

/* eye lids */
.eyelid {
  /* transform: rotate(15deg); */
}

.eyelid:nth-of-type(2n+1) {
  /* transform: rotate(-15deg); */
}

.authorarea:hover .eyelid,
.authorarea.happy .eyelid {
  transform: translate(0, -18%) rotate(-10deg);
  /* top:-500%; */
}

.authorarea:hover .eyelid:nth-of-type(2n+1),
.authorarea.happy .eyelid:nth-of-type(2n+1) {
  transform: translate(0, -18%) rotate(10deg);
}

.authorarea:hover .eyes>.pupil,
.authorarea.happy .eyes>.pupil {
  background: red;
  left: 50% !important;
  top: 50% !important;
  transform: rotate(180deg) translate(-25%) !important;
}

.authorarea:hover .eyes:nth-of-type(2n+1)>.pupil,
.authorarea.happy .eyes:nth-of-type(2n+1)>.pupil {
  left: 50% !important;
  top: 50% !important;
  transform: rotate(0deg) translate(-25%) !important;
}

.authorarea:hover .eyes>.pupil,
.authorarea.happy .eyes>.pupil {
  position: relative;
  top: 25px;
  left: 50%;
  width: 25px;
  height: 25px;
  background-color: tomato;
  border-radius: 0px;
}

.authorarea:hover .eyes>.pupil:before,
.authorarea.happy .eyes>.pupil:before {
  content: "";
  position: absolute;
  top: -12.5px;
  left: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.authorarea:hover .eyes>.pupil:after,
.authorarea.happy .eyes>.pupil:after {
  content: "";
  position: absolute;
  top: 0px;
  left: 12.5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.authorarea:hover .eyes>.pupil:before,
.authorarea.happy .eyes>.pupil:before {
  background-color: tomato;
}

.authorarea:hover .eyes>.pupil:after,
.authorarea.happy .eyes>.pupil:after {
  background-color: tomato;
}

.authorarea:hover .eyes>.pupil,
.authorarea.happy .eyes>.pupil {
  position: relative;
  top: 25px;
  left: 50%;
  width: 25px;
  height: 25px;
  background-color: tomato;
  transform: rotate(-45deg) !important;
}

.authorarea:hover .eyes:nth-of-type(2n+1)>.pupil,
.authorarea.happy .eyes:nth-of-type(2n+1)>.pupil {
  transform: rotate(-45deg) !important;
}</style>