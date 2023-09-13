import { For, mergeProps } from 'solid-js'

import ComponentItem from './ComponentItem'
import type { ComponentInfo } from '~/data/types'

interface ComponentListProps {
  components: ComponentInfo[]
}
export default function ComponentList(_props: ComponentListProps) {
  const props = mergeProps({}, _props)
  return (
    <div>
      <div class="mt-6 px-4 text-lg op-50">Result</div>
      <div class="component-list grid gap-2 of-y-auto p-4">
        <For each={props.components} fallback={<div>loading...</div>}>
          {(item) => <ComponentItem item={item} />}
        </For>
      </div>
    </div>
  )
}
