import Markdown from './Markdown'

interface ReadmeProps {
  content: string
}

export default function Readme(props: ReadmeProps) {
  return (
    <div class="px-5 pb-5 py-1">
      <Markdown content={props.content} />
    </div>
  )
}
