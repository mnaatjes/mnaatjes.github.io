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
import PageHeader from './components/PageHeader.vue'
import SectionHeader from './components/SectionHeader.vue'
import UnderConstruction from './components/UnderConstruction.vue'
import SiteFooter from './components/SiteFooter.vue'
import LicenseLoader from './components/LicenseLoader.vue'
import TermsLoader from './components/TermsLoader.vue'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(SiteFooter)
    })
  },
  enhanceApp({ app }) {
    // Register Components
    app.component("Quote", Quote)
    app.component("ProjectGrid", ProjectGrid)
    app.component("ProjectDetail", ProjectDetail)
    app.component("PageHeader", PageHeader)
    app.component("SectionHeader", SectionHeader)
    app.component("UnderConstruction", UnderConstruction)
    app.component("SiteFooter", SiteFooter)
    app.component("LicenseLoader", LicenseLoader)
    app.component("TermsLoader", TermsLoader)
  }
} satisfies Theme
