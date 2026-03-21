/**
 * @file src/.vitepress/config.mts
 * @description Foundation Settings.
 */

import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Michael Naatjes", // Site's display name
    description: "Portfolio and Documentation Hub",
    themeConfig: {
        nav: [
            {text:"Home", link:"/"},
            {text:"Projects", link:"/projects/"}
        ],
        socialLinks: [
            {icon:"github", link:"https://github.com/mnaatjes"},
            {icon:"linkedin", link:"https://linkedin.com"}
        ],
        search: {provider:"local"},
        footer: {
            copyright: `Copyright &copy; 2024-${new Date().getFullYear()} | Michael Naatjes`,
            message:"Build with VitePress"
        }
    }
})

