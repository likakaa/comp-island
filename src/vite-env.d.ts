/// <reference types="vite/client" />

export interface GiscusWidgetAttributes {
  id?: string
  host?: string
  repo: `${string}/${string}`
  'repo-id': string
  category?: string
  'category-id'?: string
  mapping: import('./components/Giscus').Mapping
  term?: string
  theme?: import('./components/Giscus').Theme
  strict?: import('./components/Giscus').BooleanString
  'reactions-enabled'?: import('./components/Giscus').BooleanString
  'emit-metadata'?: import('./components/Giscus').BooleanString
  'input-position'?: import('./components/Giscus').InputPosition
  lang?: import('./components/Giscus').AvailableLanguage
  loading?: import('./components/Giscus').Loading
}

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'giscus-widget': GiscusWidgetAttributes
    }
  }
}
