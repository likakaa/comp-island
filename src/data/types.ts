export type Framework = 'vue' | 'react' | 'angular' | 'svelte' | 'vanilla'
export type ComponentType =
  | 'ui'
  | 'chart'
  | 'table'
  | 'form'
  | 'map'
  | 'editor'
  | 'other'

export interface ComponentInfo {
  name: string
  type: ComponentType[]
  framework: Framework[]
  repository: string
  homepage: string
  description: string
  language: string
  license: string
  openIssues: number
  stars: number
  createAt: string
  updateAt: string
}

export interface RepoInfo {
  repository: string
  framework: Framework[]
  type: ComponentType[]
}
