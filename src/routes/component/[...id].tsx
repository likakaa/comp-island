import { For, Show, createSignal, onMount } from 'solid-js'
import { useParams } from 'solid-start'
import { fetchRaw } from '~/api/repo'
import Markdown from '~/components/Markdown'
import { fileterComponentByID } from '~/data'
import type { ComponentInfo } from '~/data/types'

export default function () {
  const params = useParams()
  // const navigate = useNavigate()
  // const goBack = () => navigate(-1)
  const [readMe, setReadMe] = createSignal('')
  const [changeLog, setChangeLog] = createSignal('')
  const [info, setInfo] = createSignal<ComponentInfo>()
  const [activeTab, setActiveTab] = createSignal(1)
  const tabs = [
    {
      id: 1,
      name: 'readme',
      icon: 'i-carbon-document',
    },
    {
      id: 2,
      name: 'changelog',
      icon: 'i-carbon-change-catalog',
    },
  ]

  const handleTabChanged = (id: number) => {
    setActiveTab(id)
  }

  // // TODO 404

  const fetchInfo = async () => {
    const [owner, repo] = info()?.repository?.split('/').slice(-2) || []
    const readMeStr = await fetchRaw(owner, repo, info()?.defaultBranch || 'main', 'README.md')
    let changeLogStr = await fetchRaw(owner, repo, info()?.defaultBranch || 'main', 'CHANGELOG.md')
    if (!changeLogStr) {
      changeLogStr = await fetchRaw(owner, repo, info()?.defaultBranch || 'main', 'CHANGELOG.zh-CN.md')
    }
    setReadMe(readMeStr)
    setChangeLog(changeLogStr)
  }
  onMount(async () => {
    setInfo(fileterComponentByID(+params.id))
    await fetchInfo()
  })
  return (
    <main>
      <div class="flex flex-row flex-wrap pb5 px-1 min-w-full mt-2">
        {/* <button onClick={goBack}>Go back</button> */}
        <div class="w-full max-w-1200px m-auto ">
          <h2 class="max-w-full no-underline mt3 m-0 text-2xl w-full justify-start items-center flex-row flex">
            <span class="font-semibold truncate c-black mb-2">{info()?.name}</span>
            <div>
              <a href="#" class="flex">
                <span class="text-sm ml-3">{info()?.type}</span>
              </a>
            </div>
          </h2>
          <span class="text-nowrap text-sm py-.5 c-gray-8 font-mono font-400 mb-.5">2.3.0 &nbsp;•&nbsp;</span>
          <span class="text-nowrap text-sm py-.5 c-green-6 font-mono font-400 mb-.5">Public &nbsp;•&nbsp;</span>
          <span class="text-nowrap text-sm py-.5 c-gray-8 font-mono font-400 mb-.5">Updated 8 months ago</span>
        </div>
        <ul class="flex flex-row p0 w-full max-w-1200px items-center list-none m-auto" role="tablist">
          <For each={tabs}>
            {(item) => (
              <li
                class={`${
                  activeTab() === item.id ? 'border-opacity-90' : 'border-opacity-0'
                } relative inline-flex text-sm font-sans transition leading-snug items-center bg-slate-500 bg-opacity-0 hover:bg-opacity-5 overflow-hidden border-blue-7 dark:border-gray-200 border-b-2 dark:border-opacity-0 dark:hover:border-opacity-10`}
                role="tab"
                id={`${item.id}`}
                onClick={() => handleTabChanged(item.id)}
              >
                <button type="button" class="w-full -mb-0.5 my-12px mx-15px py-2 text-xl">
                  {item.name}
                </button>
              </li>
            )}
          </For>
        </ul>
        <div class="min-w-full">
          <Show when={activeTab() === 1}>
            <Markdown content={readMe()} />
          </Show>
          <Show when={activeTab() === 2}>
            <Markdown content={changeLog()} />
          </Show>
        </div>
      </div>
    </main>
  )
}
