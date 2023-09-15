import MarkdownIt from 'markdown-it'
import { createEffect, createSignal, onMount } from 'solid-js'
import Shikiji from 'markdown-it-shikiji'
import LinkAttributes from 'markdown-it-link-attributes'

interface MarkdownProps {
  content: string
}

export default function Markdown(props: MarkdownProps) {
  const [html, setHtml] = createSignal('')
  const md = MarkdownIt({
    html: true,
  })
  createEffect(() => {
    setHtml(md.render(props.content))
  })
  onMount(async () => {
    md.use(
      await Shikiji({
        themes: {
          light: 'vitesse-light',
          dark: 'vitesse-dark',
        },
      }),
    ).use(LinkAttributes, {
      matcher: (link: string) => /^https?:\/\//.test(link),
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    })
  })

  // eslint-disable-next-line solid/no-innerhtml
  return <div class="prose prose-sm min-w-prose text-left" innerHTML={html()} />
}
