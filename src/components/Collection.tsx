import { ComponentType, type ComponentInfo, Framework } from '@/data/types'
import { For } from 'solid-js'

export default function Collection() {
  // TODO fetch data from @/data
  const data: ComponentInfo[] = [
    {
      name: 'Element UI',
      type: [ComponentType.UI],
      framework: [Framework.Vue],
      repository: 'https://github.com/ElemeFE/element',
      homepage: 'https://element.eleme.io/',
      description: 'A Vue.js 2.0 UI Toolkit for Web',
    },
    {
      name: 'Vux',
      type: [ComponentType.UI],
      framework: [Framework.Vue],
      repository: 'https://github.com/airyland/vux',
      homepage: 'https://vux.li/',
      description: 'Mobile UI Components based on Vue & WeUI',
    },
    {
      name: 'Ant Design',
      type: [ComponentType.UI],
      framework: [Framework.React],
      repository: 'https://github.com/ant-design/ant-design',
      homepage: 'https://ant.design/',
      description: 'A UI Design Language',
    },
  ]
  return (
    <div>
      <div class="mt-6 px-2 text-lg op-50">Result</div>
      <div class="collections-list grid gap-2 of-hidden p-2 p-2">
        <For each={data} fallback={<div>loading...</div>}>
          {(item) => (
            /* TODO 需要封装一个组件
            1. 根据`type`显示不同的 icon
            2. 异步获取`repository`的`star`数、`issues`数、最近更新时间
          */
            <a class="relative translate-z-0 items-center gap2 border p3 transition-all border-base color-base hover:text-#1677ff hover:shadow !hover:border-#1677ff">
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.framework}</div>
              <div>{item.type}</div>
            </a>
          )}
        </For>
      </div>
    </div>
  )
}
