import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fold Craft Launcher",
  description: "fcl启动器文档",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'icon', href: '/fcl_logo.png' }]
  ], 
  
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '文档首页', link: '/' },
      { text: '下载安装', link: '/download' },
      { text: '渲染器插件', link: '/plugins' },
      { text: '快速入门', link: '/docs/intro' },
      { text: '详细文档', 
        items: [
          { text: '介绍', link: '/docs/intro' },
          { text: '渲染器', link: '/docs/GL' },
          { text: '禁忌的模组', link: '/docs/mods' },
          { text: '崩溃处理方法', link: '/docs/crash' },
          { text: '不详细的功能介绍', link: '/docs/LATT' },
          { text: '上传布局', link: '/docs/cc' },
          { text: '创建新键位', link: '/docs/nc' },
          { text: 'Vulkan mod', link: '/docs/Vulkanmod' },
          { text: 'Android Lib', link: '/docs/AndroidLib' },
          { text: '官方插件', link: '/docs/plugins' },
          { text: '第三方插件', link: '/docs/dplugins' },
          { text: 'VulkanAPI', link: '/docs/VulkanAPI-Check' },
          { text: '“成品VulkanMod', link: '/docs/VulkanMod-Done' },
          { text: '关于本站', link: '/about' },
          { text: 'README', link: '/README' },
        ]
       },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '下载安装', link: '/download' },
          { text: '快速入门', link: '/docs/intro' }
        ]
      },
      {
        text: '启动器',
        items: [
          { text: '介绍', link: '/docs/intro' },
          { text: '渲染器', link: '/docs/GL' },
          { text: '不详细的功能介绍', link: '/docs/LATT' },
        ]
      },
      {
        text: '崩溃处理',
        items: [
          { text: '禁忌的模组', link: '/docs/mods' },
          { text: '崩溃处理方法', link: '/docs/crash' },
        ]
      },
      {
        text: '控制布局',
        items: [
          { text: '控件上传', link: '/docs/cc' },
        ]
      },
      {
        text: '插件',
        items: [
          { text: '官方插件', link: '/docs/plugins' },
          { text: '第三方插件', link: '/docs/dplugins' },
        ]
      },
      {
        text: 'Vulkan mod',
        items: [
          { text: 'Vulkan mod', link: '/docs/Vulkanmod' },
          { text: 'Android Lib', link: '/docs/AndroidLib' },
          { text: 'VulkanAPI', link: '/docs/VulkanAPI-Check' },
          { text: '“成品VulkanMod', link: '/docs/VulkanMod-Done' },
        ]
      },
      {
        text: '关于本站',
        items: [
          { text: 'README', link: '/README' },
          { text: '关于本站', link: '/about' },
        ]
      },
    ],
  

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FCL-Team/FoldCraftLauncher' }
    ],
    footer: {
      copyright: '© 2024-2025 @柠枺 此站非官方文档，请不要与fcl团队产生任何挂钩！<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">新ICP备2024015133号-2</a>'
    }
  }
})
