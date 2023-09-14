import { For, mergeProps } from 'solid-js'

import ComponentItem from './ComponentItem'
import type { ComponentInfo } from '~/data/types'

interface ComponentListProps {
  components: ComponentInfo[]
}

export default function ComponentList(_props: ComponentListProps) {
  const props = mergeProps({}, _props)
  // const frameworks: Framework[] = ['vue', 'react', 'angular', 'svelte']
  return (
    <div>
      <div class="flex justify-between">
        <div class="px-4 text-lg op-60">Result</div>
        <div class="px-4 fcc gap-2 op-60">
          {/* 筛选 */}
          {/* <For each={frameworks}>
            {(item) => (
              <span class="fcc gap-2">
                <input type="checkbox" />
                <span>{item}</span>
              </span>
            )}
          </For> */}
          {/* 排序 */}
        </div>
      </div>
      <div class="component-list grid gap-2 of-y-auto p-4">
        <For each={props.components} fallback={<div>loading...</div>}>
          {(item) => <ComponentItem item={item} />}
        </For>
      </div>
    </div>
  )
}
