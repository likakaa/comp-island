import MarkdownIt from 'markdown-it'
import { createEffect, createSignal } from 'solid-js'
import Shikiji from 'markdown-it-shikiji'
import LinkAttributes from 'markdown-it-link-attributes'

interface MarkdownProps {
  content: string
}

export default function Markdown(props: MarkdownProps) {
  const md = MarkdownIt({
    html: true,
  })
  const [html, setHtml] = createSignal('')
  const render = async () => {
    const html = md
      .use(
        await Shikiji({
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        }),
      )
      .use(LinkAttributes, {
        matcher: (link: string) => /^https?:\/\//.test(link),
        attrs: {
          target: '_blank',
          rel: 'noopener',
        },
      })
      .render(props.content)
    setHtml(html)
  }

  createEffect(() => {
    render()
  })

  // eslint-disable-next-line solid/no-innerhtml
  return <div class="prose prose-sm m-auto text-left" innerHTML={html()} />
}
