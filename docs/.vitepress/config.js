
export default {
    title: '毛哥笔记',
    description: '去留无意 闲看庭前花开花落.',
    themeConfig: {
        siteTitle: '进阶指南',
        lastUpdatedText: 'Updated Date',
        nav: [
            { text: '指南', link: '/guide/index' },
            { text: 'vue', link: '/vue/index' },
            { text: 'Node', link: '/node/index' }
        ],
        socialLinks: [{
            icon: 'github', link: 'https://github.com/dongbaihan'
        }],
        sidebar: {
            '/guide/': [
                {
                    text: '指南',
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: '简介', link: '/guide/' }, // /guide/index.md
                    ]
                }
            ],
            '/vue/': [
                {
                    text: 'vue',
                    items: [
                        { text: '简介', link: '/vue/' },
                        { text: 'vue', link: '/vue/vue' }
                    ]
                }
            ],
            '/node/': [
                {
                    text: 'node',
                    items: [
                        { text: '简介', link: '/node/' },
                        { text: 'node', link: '/node/node' }
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present <a href="https://github.com/dongbaihan">dongbaihan</a>'
        }
    }
}