/**
 * @file src/.vitepress/theme/index.ts
 * @description Extend the Default Vitepress Theme for tailwindCSS and Register Components globally
 */
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import Quote from './components/Quote.vue'
import ProjectGrid from './components/ProjectGrid.vue'
import ProjectDetail from './components/ProjectDetail.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register Components
    app.component("Quote", Quote)
    app.component("ProjectGrid", ProjectGrid)
    app.component("ProjectDetail", ProjectDetail)
  }
} satisfies Theme
