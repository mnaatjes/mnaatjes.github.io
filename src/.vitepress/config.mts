/**
 * @file src/.vitepress/config.mts
 * @description Foundation Settings.
 */

import { defineConfig } from 'vitepress'
import tailwind from '@tailwindcss/vite'
import pkg from '../../package.json'

export default defineConfig({
    title: "Michael Naatjes", // Site's display name
    description: "Portfolio and Documentation Hub",
    vite: {
        plugins: [tailwind()]
    },
    themeConfig: {
        nav: [
            {text:"Home", link:"/"},
            {text:"Projects", link:"/projects/"},
            {text:"Solutions", link:"/solutions/"},
            {text:"Case Studies", link:"/case_studies/"},
            {text:"About", link:"/about/"}
        ],
        socialLinks: [
            {icon:"github", link:"https://github.com/mnaatjes"},
            {icon:"linkedin", link:"https://linkedin.com"}
        ]
    }
})
