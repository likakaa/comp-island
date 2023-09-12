import { createSignal, mergeProps, onMount } from 'solid-js'
import MarkdownIt from 'markdown-it'
import Shikiji from 'markdown-it-shikiji'

interface ReadmeProps {
  content: string
}

export default function Readme(_props: ReadmeProps) {
  const props = mergeProps({}, _props)
  const [mdHTML, setMdHTML] = createSignal('')
  const render = async () => {
    const md = MarkdownIt()
    md.use(
      await Shikiji({
        themes: {
          light: 'vitesse-light',
          dark: 'vitesse-dark',
        },
      }),
    )
    setMdHTML(md.render(props.content))
  }
  onMount(async () => {
    await render()
  })
  return (
    <div>
      {/* eslint-disable-next-line solid/no-innerhtml */}
      <div class="prose prose-sm m-auto text-left" innerHTML={mdHTML()} />
    </div>
  )
}
