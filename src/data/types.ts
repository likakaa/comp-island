export enum Framework {
  Vue = 'vue',
  React = 'react',
  Angular = 'angular',
  Svelte = 'svelte',
  Vanilla = 'vanilla',
  Solid = 'solid',
}

export enum ComponentType {
  UI = 'ui',
  Chart = 'chart',
  Map = 'map',
  Table = 'table',
}

export interface ComponentInfo {
  name: string
  type: ComponentType[]
  framework: Framework[]
  repository: string
  homepage: string
  description: string
  lastUpdate?: string
}
