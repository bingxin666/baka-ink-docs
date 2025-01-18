import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Baka.Ink 站点文档",
  description: "实例规则和其他小玩意",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '实例规则', link: '/regulations' },
      { text: 'Baka.Ink', link: 'https://baka.ink' }
    ],

    sidebar: [
      {
        text: '文档列表',
        items: [
          { text: '实例规则', link: '/regulations' },
          { text: '维护说明', link: '/maintenance' },
        ]
      }
    ],
  },
  lastUpdated: true
})
