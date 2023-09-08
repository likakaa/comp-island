import { Show, createSignal, mergeProps } from 'solid-js'

interface SearchBarProps {
  value?: string
  onInput?: (e: any) => void
}

export default function SearchBar(_props: SearchBarProps) {
  const { value, onInput } = mergeProps({}, _props)
  const clear = () => {}

  const handleInput = (e: any) => {
    onInput(e)
  }
  return (
    <div class="flex border-x border-b border-b px-4 py-3 outline-none md:flex md:border-t border-base md:rounded md:py-1">
      <div class="m-auto inline-block flex-none align-middle lh-1em opacity-60">
        <div class="i-carbon-search" />
      </div>
      <form action="/" class="flex-auto" role="search" method="get">
        <input
          aria-label="Search"
          class="m-0 w-full bg-transparent px-4 py-1 text-base outline-none"
          type="text"
          name="s"
          placeholder="Search Components..."
          autofocus
          autocomplete="off"
          value={value}
          onInput={handleInput}
        />
      </form>
      <Show when={value}>
        <button
          class="flex items-center opacity-60 hover:opacity-80"
          onClick={clear}
        >
          <div class="i-carbon-close m-auto text-lg -mr-1" />
        </button>
      </Show>
    </div>
  )
}
