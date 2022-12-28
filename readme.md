
1. 第一步创建文件夹然后进入目录
```powershell
mkdir vitepress-starter && cd vitepress-starter
```
2. 初始化package配置文件
```powershell
yarn init
```
3. 安装VitePress 和 vue
```powershell
yarn add --dev vitepress vue
```
4. 创建docs文件夹，用于存放我们的文档
```powershell
mkdir docs && echo '# Hello VitePress' > docs/index.md
```
5. package.json中配置开发环境运行命令
```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```
6. 运行开发环境
```powershell
yarn doc:dev
```
- VitePress将会启动一个热更新的开发环境在本地默认端口， http://localhost:5173/
  
至此一个最简单、最普通的VitePress就搭建好了。

# 完善并进行个性化配置
1. 在docs文件件下创建.vitepress文件夹，然后创建config.js文件。
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
2. 在.vitepress/config.js文件中进行站点的各项配置。
```javascript
export default {
    title: '毛哥笔记',
    description: '去留无意 闲看庭前花开花落.',
    themeConfig: {
        siteTitle: '进阶指南',
        lastUpdatedText: 'Updated Date',
        nav: [
            { text: 'web前端', link: '/guide' },
            { text: 'Node', link: '/configs' },
            { text: 'TypeScript', link: '/configs' },
            { text: 'Vue', link: 'https://github.com/...' },
            { text: '常见问题', link: 'https://github.com/...' }
        ],
        socialLinks: [{
            icon: 'github', link: 'https://github.com/dongbaihan'
        }],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present <a href="https://github.com/dongbaihan">dongbaihan</a>'
        }
    }
}
```

