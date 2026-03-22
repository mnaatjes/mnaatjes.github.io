// src/projects/[project].paths.ts
import loader from './projects.data'
import type { Project } from '../types/project'

/**
 * PATHS CONFIGURATION
 * This file tells VitePress exactly which dynamic URLs to generate
 */
export default {
  async paths() {
    const projects: Project[] = await loader.load()

    // Map your array of projects into the format VitePress expects
    return projects.map((project: Project) => {
      return {
        params: { 
          project: project.id, // This MUST match the [project] bracket name
          data: project        // This is your full object
        }
      }
    })
  }
}
