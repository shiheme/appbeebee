<template>
  <!-- 文章涉及的资源下载等。文章内调用 -->
  <div class="articlelink">
    <div class="title"><span class="span"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M7.94101 18C7.64391 16.7274 6.30412 15.6857 5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.6944 15.687 16.3558 16.7276 16.059 18H7.94101ZM16 20V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V20H16ZM13 10.0048V6L8.5 12.0048H11V16.0048L15.5 10.0048H13Z"
            fill="currentColor"></path>
        </svg>{{ work?.title ? work.title : '资源信息' }}</span></div>
    <div class="view" v-if="work?.view && !work?.qrcode"><a class="a vp-external-link-icon" :href="work?.view"
        target="_blank"><span>{{ work.viewtit ?
          work.viewtit : '官网 / 效果' }}</span></a>
    </div>
    <VDropdown placement="top" :distance="10" v-if="work?.view && work?.qrcode">
      <div class="view" v-tooltip="''" v-if="work?.view"><button class="a">
          <span>{{ work.viewtit ?
            work.viewtit : '预览效果' }}</span>
          <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16 17V16H13V13H16V15H18V17H17V19H15V21H13V18H15V17H16ZM21 21H17V19H19V17H21V21ZM3 3H11V11H3V3ZM5 5V9H9V5H5ZM13 3H21V11H13V3ZM15 5V9H19V5H15ZM3 13H11V21H3V13ZM5 15V19H9V15H5ZM18 13H21V15H18V13ZM6 6H8V8H6V6ZM6 16H8V18H6V16ZM16 6H18V8H16V6Z"
              fill="currentColor"></path>
          </svg>
        </button>
      </div>
      <template #popper>
        <img class="img qrcodeimg" :src="work?.qrcode" alt="" />
      </template>
    </VDropdown>
    <div class="tobeebee" v-if="work?.beecode || work?.linkpan"><a class="a vp-external-link-icon"
        :href="work?.beecode ? theme.beecodeurl + work?.beecode + '.htm' : work?.linkpan" target="_blank"><span>备用下载</span></a>
    </div>
    <div class="entry" v-if="work?.via">
      <div class="githublink">
        <a class="a" :href="work?.via" target="_blank">
          <strong class="strong">作品出处：</strong>
          <span class="span">{{ work?.via }}</span>
        </a>
      </div>
    </div>
    <div class="entry" v-if="work?.github">
      <div class="githublink" :class="{ card: entrystart }">
        <a class="a" :href="'https://github.com/' + work?.github" target="_blank">
          <strong class="strong"><svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"
                fill="currentColor"></path>
            </svg>Github源码</strong>
          <span class="span">{{ work?.github }}</span>
        </a>
      </div>
      <div class="githubcard" v-if="entrystart">
        <ul class="ul">
          <li class="li" v-if="entry?.stargazers_count !== 0"><svg class="svg" aria-hidden="true" height="16"
              viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
              <path
                d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z">
              </path>
            </svg> Star : {{ entry?.stargazers_count }}</li>
          <li class="li" v-if="entry?.open_issues_count !== 0"><svg class="svg" aria-hidden="true" height="16"
              viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
            </svg> Issues : {{ entry?.open_issues_count }}</li>
          <li class="li" v-if="entry?.forks_count !== 0"><svg class="svg" aria-label="fork" role="img" height="16"
              viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
              <path
                d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z">
              </path>
            </svg> Forks : {{ entry?.forks_count }}</li>
          <li class="li" v-if="entry?.license"><svg class="svg" aria-hidden="true" height="16" viewBox="0 0 16 16"
              version="1.1" width="16" data-view-component="true">
              <path
                d="M8.75.75V2h.985c.304 0 .603.08.867.231l1.29.736c.038.022.08.033.124.033h2.234a.75.75 0 0 1 0 1.5h-.427l2.111 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.006.005-.01.01-.045.04c-.21.176-.441.327-.686.45C14.556 10.78 13.88 11 13 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L12.178 4.5h-.162c-.305 0-.604-.079-.868-.231l-1.29-.736a.245.245 0 0 0-.124-.033H8.75V13h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5V3.5h-.984a.245.245 0 0 0-.124.033l-1.289.737c-.265.15-.564.23-.869.23h-.162l2.112 4.692a.75.75 0 0 1-.154.838l-.53-.53.529.531-.001.002-.002.002-.006.006-.016.015-.045.04c-.21.176-.441.327-.686.45C4.556 10.78 3.88 11 3 11a4.498 4.498 0 0 1-2.023-.454 3.544 3.544 0 0 1-.686-.45l-.045-.04-.016-.015-.006-.006-.004-.004v-.001a.75.75 0 0 1-.154-.838L2.178 4.5H1.75a.75.75 0 0 1 0-1.5h2.234a.249.249 0 0 0 .125-.033l1.288-.737c.265-.15.564-.23.869-.23h.984V.75a.75.75 0 0 1 1.5 0Zm2.945 8.477c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327Zm-10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327Z">
              </path>
            </svg> License : {{ entry?.license }}</li>
          <li class="li" v-if="entry?.updated_at"><svg class="svg" aria-hidden="true" focusable="false" role="img"
              viewBox="0 0 16 16" width="16" height="16" fill="currentColor"
              style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;">
              <path
                d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z">
              </path>
            </svg> Updated_at : {{ relativeTime(entry?.updated_at) }}</li>
        </ul>
      </div>
    </div>
    <div class="other" v-tooltip="'点击复制关键词'" v-if="work?.wxwords" @click="handleCopy(work.wxwords)">
      <span class="span">* 公众号回复【{{ work?.wxwords }}】获取下载链接</span>
      <span class="span">* 侧栏扫码关注公众号</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useData } from 'vitepress';
import { relativeTime, getGithub, handleCopy } from '../functions'
import type { Work } from '../types'
const { theme, frontmatter } = useData();
const props = defineProps<{
  work?: Work
}>();
const github = ref('');
github.value = props.work?.github ? props.work.github : ''
const entrystart = ref(false)
const entry = ref({
  pushed_at: '',
  updated_at: '',
  stargazers_count: 0,
  open_issues_count: 0,
  forks_count: 0,
  license: '',
  homepage: ''
})

onMounted(() => {
  if (github.value) {
    getGithub(github.value).then(result => {
      if (result?.code === 200) {
        entrystart.value = true
        entry.value = result?.data
      }
    });
  }
});
</script>

<style scoped>
.articlelink {
  margin-bottom: 10px;
  max-width: 300px;
  margin: 50px auto;
  border-color: var(--vp-badge-info-border);
  color: var(--vp-badge-info-text);
  background-color: var(--vp-badge-info-bg);
  padding: 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  box-sizing: border-box;
}

.title {
  line-height: 24px;
  font-size: 15px;
  margin-bottom: 10px;

  .span {
    display: block;
    word-break: break-all;
  }

  .span:first-child {
    display: flex;
    flex-direction: row;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .svg {
    width: 14px;
    height: 14px;
    margin-top: 5px;
    fill: currentColor;
    margin-right: 5px;
    flex-shrink: 0;
  }
}

.other {
  display: block;
  line-height: 20px;
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;

  .span {
    display: block;
  }
}

.view {
  width: 100%;
  margin-top: 10px;
  font-size: 14px;

  .a {
    width: 100%;
    height: 40px;
    background-color: var(--vp-c-brand-2);
    color: rgba(255, 255, 245, 0.86);
    border-radius: 8px;
    border: 1px solid var(--vp-c-divider);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: .5s;
  }

  .a::after {
    color: rgba(235, 235, 245, 0.38) !important;
  }

  .a:hover {
    border: 1px solid var(--vp-c-brand-1);
    transition: .5s;
  }

  .svg {
    width: 14px;
    height: 14px;
    margin-left: 3px;
  }

  .link.svg {
    display: block;
  }

  .qrcode.svg {
    display: none;
  }


}

.qrcodeimg {
  width: 144px;
  height: 144px;
  border-radius: 50%;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}

.tobeebee {
  width: 100%;
  margin-top: 10px;
  font-size: 14px;

  .a {
    width: 100%;
    height: 40px;
    border: 1px solid var(--vp-c-divider);
    background-color: var(--vp-c-bg-elv);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: .5s;

    .svg {
      width: 14px;
      height: 14px;
      margin-left: 3px;
    }
  }
}

.view.wxqrcode {
  .link.svg {
    display: none;
  }

  .qrcode.svg {
    display: block;
  }
}

.entry {
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-elv);
  border-radius: 8px;
  margin-top: 10px;
  overflow: hidden;

  .githublink {

    .a {
      font-size: 12px;
      display: block;
      padding: 10px 16px;

      .strong {
        display: flex;
        flex-direction: row;
        font-size: 14px;

        .svg {
          width: 20px;
          margin-right: 5px;
        }
      }

      .span {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical !important
      }
    }

    .a:hover {
      background-color: var(--vp-c-bg-alt);
    }

    .a:hover {
      background-color: var();
    }
  }

  .githubcard {
    border-top: 1px solid var(--vp-c-divider);
    padding: 10px 0;

    .ul {
      margin: 0;
      padding: 0;

      .li {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 16px;
        margin: 0;
        opacity: .6;
        font-size: 12px;
        font-weight: 500;

        .svg {
          width: 13px;
          height: 13px;
          fill: currentColor;
          margin-right: 5px;
        }
      }
    }
  }

}</style>