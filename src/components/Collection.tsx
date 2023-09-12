import { For, mergeProps } from 'solid-js'
import { A } from 'solid-start'
import type { ComponentInfo } from '~/data/types'

interface CollectionProps {
  components: ComponentInfo[]
}

const iconMap: Record<string, string> = {
  vue: 'i-logos-vue',
  react: 'i-logos-react',
  angular: 'i-logos-angular-icon',
  svelte: 'i-logos-svelte-icon',
  flutter: 'i-logos-flutter',
  webpack: 'i-logos-webpack',
}

export default function Collection(_props: CollectionProps) {
  const props = mergeProps({}, _props)
  return (
    <div>
      <div class="mt-6 px-4 text-lg op-50">Result</div>
      <div class="collections grid gap-2 of-y-auto p-4">
        <For each={props.components} fallback={<div>loading...</div>}>
          {(item) => (
            <A
              href="/about"
              class="flex flex-col justify-between rd-md translate-z-0 items-center gap2 border p-16px transition-all border-base color-base hover:text-primary hover:shadow !hover:border-primary"
            >
              <div class="flex flex-col w-full">
                <div class="flex justify-between">
                  <div class="fcc">
                    <div class="i-octicon-repo-24 mr-2 text-14px" />
                    <span class="c-blue-500 text-14px">{item.name}</span>
                    <span class="text-gray h-18px lh-18px b-1 b-gray rd-4 text-12px px-2 ml-2">
                      {item.type}
                    </span>
                  </div>
                  <div class="text-12px c-gray-400">
                    {item.updateAt.split('T')[0]}
                  </div>
                </div>
                <div class="mt-2 mb-0 flex-grow flex-shrink-0 flex-basis-auto h-40px ">
                  <a href={item.repository} target="_blank">
                    <p class="c-gray-500 text-12px">{item.description}</p>
                  </a>
                </div>
                <div class="flex mt-2 justify-between">
                  <div class="flex">
                    <For each={item.framework}>
                      {(subItem) => (
                        <div class=" transition hover:translate-y--2px mr-2 fcc">
                          <div class={`${iconMap[subItem]} w-14px h-14px`} />
                        </div>
                      )}
                    </For>
                  </div>
                  <div class="fcc c-gray-500">
                    <div class="fcc ml-2 text-12px">
                      <div class="i-octicon-star-24 w-16px h-16px mr-1" />
                      <span class="lh-10px">{item.stars}</span>
                    </div>
                    <div class="fcc ml-2 text-12px">
                      <div class="i-octicon-issue-opened-24 w-16px h-16px mr-1" />
                      <span class="lh-10px">{item.openIssues}</span>
                    </div>
                  </div>
                </div>
              </div>
            </A>
          )}
        </For>
      </div>
    </div>
  )
}
