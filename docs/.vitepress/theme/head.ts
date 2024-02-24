import type { HeadConfig } from 'vitepress';

// console.log('dddddd',frontmatter.value)
export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', href: '/logo.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' }], //全局控制图片放大样式
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
  ['meta', { property: 'og:image', content: '/logo.png' }],
  ['meta', { name: 'referrer', content: 'no-referrer' }],
  [
    'script',
    {},
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?bf9f13ec72376c75ea9d913408ebc20d";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`
    ],
  [
    "script",
    {
      crossorigin: "anonymous",
      async: "",
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1279518235550313",
    },
  ],
  [
    'script',
    { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-QRQ5599P9G' }
  ],
  [
    'script',
    {},
    `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-QRQ5599P9G');`
  ],
  [
    "script",
    {
      nonce: "X3-MeXfNjwsxlQdQcRqhtQ",
      async: "",
      src: "https://fundingchoicesmessages.google.com/i/pub-1279518235550313?ers=1",
    },
  ],
  [
    'script',
    {},
    `(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();`
  ],
  [
    "link",
    { rel: "stylesheet", href: "/static/css/fancybox.css" },   //全局控制图片放大样式
  ],
  ["script", { src: "/static/js/fancybox.umd.js" }],  //全局控制图片放大交互
];