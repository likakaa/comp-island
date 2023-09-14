import solid from 'solid-start/vite'
import { defineConfig } from 'vite'
import unocss from '@unocss/vite'
// @ts-expect-error - missing types
import netlifyAdapter from 'solid-start-netlify'

export default defineConfig({
  plugins: [
    solid({
      ssr: true,
      adapter: netlifyAdapter(),
    }),
    unocss(),
  ],
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
})
