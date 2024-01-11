import type { HeadConfig } from 'vitepress';
export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['link', { rel: 'icon', href: '/logo.png' }],
  ['link', { rel: 'apple-touch-icon',sizes:'180x180', href: '/logo.png' }],
  [
    "script",
    {
      crossorigin: "anonymous", 
      async: "",
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1279518235550313",
    },
  ],
];