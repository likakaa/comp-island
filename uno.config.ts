import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-100',
    'color-base': 'text-gray-900 dark:text-gray-300',
    'bg-base': 'bg-white dark:bg-[#181818]',
    'icon-button': 'op50 hover:op100 my-auto',
  },
})
