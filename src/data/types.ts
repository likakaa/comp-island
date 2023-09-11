export type Framework = 'vue' | 'react' | 'angular' | 'svelte' | 'vanilla'
export type ComponentType = 'ui' | 'chart' | 'editor' | 'table' | 'form' | 'map' | 'media' | 'other'
export type DeviceType = 'responsive' | 'mobile' | 'desktop' | 'tablet'

export interface ComponentInfo {
  name: string
  author: string
  authorUrl?: string
  authorAvatar: string
  defaultBranch?: string
  type: ComponentType[]
  framework: Framework[]
  repository: string
  homepage: string
  description: string
  language: string
  license: string
  openIssues: number
  stars: number
  topics?: string[]
  createAt: string
  updateAt: string
}

export interface RepoInfo {
  repository: string
  framework: Framework[]
  type: ComponentType[]
}
