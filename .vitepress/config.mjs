import { defineConfig } from 'vitepress'
import { set_sidebar } from './utils/auto_siderbar.mjs' // 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs-demo/', // 默认地址
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  title: '我的厉害的文档项目',
  description: 'A VitePress Site',
  themeConfig: {
    // 设置搜索框的样式
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },

    outlineTitle: '目录',
    outline: [2, 6],
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '家',
        items: [
          { text: '首页', link: '/' },
          { text: 'markdown示例', link: '/markdown-examples' },
        ],
      },
      { text: '示例', link: '/markdown-examples' },
      { text: '自动生成侧边栏', link: '/front-end/react/' },
      { text: '自动生成侧边栏2', link: '/backend/rabbitmq/' },
      { text: '两边栏演示', link: '/两边栏演示' },
    ],

    // sidebar: [
    //   {
    //     text: '示例',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' },
    //     ],
    //   },
    //   {
    //     text: '示例2',
    //     items: [
    //       { text: 'Markdown 演示', link: '/markdown-examples' },
    //       { text: 'Runtime API 演示', link: '/api-examples' },
    //     ],
    //   },
    // ],

    // sidebar: { '/front-end/react': set_sidebar('front-end/react') },

    // sidebar: {
    //   '/front-end/react': set_sidebar('front-end/react'),
    //   '/backend/rabbitmq': set_sidebar('backend/rabbitmq'),
    // },
    siderbar: false, // 关闭侧边栏
    aside: 'left', // 设置右侧侧边栏在左边显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/harveyLXH' },
      {
        icon: {
          svg: '<svg t="1718301095762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1532" width="200" height="200"><path d="M512 960c-246.4 0-448-201.6-448-448s201.6-448 448-448 448 201.6 448 448-201.6 448-448 448z" fill="#D81E06" p-id="1533"></path><path d="M721.664 467.968h-235.52a22.272 22.272 0 0 0-20.736 20.736v51.776c0 10.368 10.368 20.736 20.736 20.736H628.48c10.368 0 20.736 10.304 20.736 20.672v10.368c0 33.664-28.48 62.08-62.144 62.08H392.896a22.272 22.272 0 0 1-20.672-20.672V436.928c0-33.664 28.48-62.08 62.08-62.08h287.36a22.272 22.272 0 0 0 20.736-20.736v-51.84a22.272 22.272 0 0 0-20.736-20.672h-287.36A152.96 152.96 0 0 0 281.6 434.368v287.36c0 10.304 10.368 20.672 20.736 20.672h302.848c75.072 0 137.216-62.08 137.216-137.216v-116.48a22.272 22.272 0 0 0-20.736-20.736z" fill="#FFFFFF" p-id="1534"></path></svg>',
        },
        link: 'https://gitee.com',
      },
    ],
    // 底部配置
    footer: {
      copyright: 'Copyright@ 2024 Harve',
    },
  },
})
