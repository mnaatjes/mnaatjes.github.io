/**
 * @file src/types/project.ts
 */
export interface Project {
    id: string;
    title: string;
    description: string;
    readmeHTML: string;
    stars: number;
    languages: string[];
    version: string;
    ogImage: string;
    url: string;
}