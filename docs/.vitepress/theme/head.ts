import type { HeadConfig } from 'vitepress';
export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', href: '/logo.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo.png' }],
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
    { rel: "stylesheet", href: "/static/css/fancybox.css" },
  ],
  ["script", { src: "/static/js/fancybox.umd.js" }],
  [
    "link",
    { rel: "stylesheet", href: "/static/css/carousel.css" },
  ],
  ["script", { src: "/static/js/carousel.umd.js" }],
  [
    "link",
    { rel: "stylesheet", href: "/static/css/carousel.thumbs.css" },
  ],
  ["script", { src: "/static/js/carousel.thumbs.esm.js" }],
  [
    'script',
    {},
    `const container = document.getElementById("myCarousel");const options = { infinite: false };new Carousel(container, options);`
  ]
];