import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Baka.Ink 站点文档",
  description: "实例规则和其他小玩意",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '社区准则', link: '/regulations' },
      { text: 'Baka.Ink', link: 'https://baka.ink' }
    ],

    sidebar: [
      {
        text: '文档列表',
        items: [
          { text: '社区准则', link: '/regulations' },
          { text: '服务条款', link: '/terms-of-service' },
          { text: '隐私政策', link: '/privacy-policy' },
          { text: '维护说明', link: '/maintenance' }
        ]
      }
    ],
  },
  lastUpdated: true
})
