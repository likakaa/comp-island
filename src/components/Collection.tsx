import { For } from 'solid-js'
import { components } from '~/data/components'

export default function Collection() {
  // TODO fetch data from @/data
  return (
    <div>
      <div class="mt-6 px-2 text-lg op-50">Result</div>
      <div class="collections-list grid gap-2 of-hidden p-2 p-2">
        <For each={components} fallback={<div>loading...</div>}>
          {(item) => (
            /* TODO 需要封装一个组件
            1. 根据`type`显示不同的 icon
            2. 异步获取`repository`的`star`数、`issues`数、最近更新时间
          */
            <a class="relative translate-z-0 items-center gap2 border p3 transition-all border-base color-base hover:text-primary hover:shadow !hover:border-primary">
              <div>{item.name}</div>
              {/* <div>{item.description}</div> */}
              <div>{item.framework}</div>
              <div>{item.type}</div>
            </a>
          )}
        </For>
      </div>
    </div>
  )
}
