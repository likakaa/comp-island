import { createSignal } from 'solid-js'
import Collection from '~/components/Collection'
import { Navbar } from '~/components/Navbar'
import SearchBar from '~/components/SearchBar'
import { filterComponents } from '~/data'
import type { ComponentInfo } from '~/data/types'

export default function Home() {
  const [components, setComponents] = createSignal<ComponentInfo[]>([])
  const handleSearch = async (value: string) => {
    const res = await filterComponents(value)
    setComponents(res)
  }
  handleSearch('')
  return (
    <main class="flex flex-col h-screen overflow-hidden bg-base">
      <div class="h-full flex-auto overflow-overlay">
        <div class="flex h-screen flex-col overflow-hidden">
          <Navbar />
          <div class="flex-auto flex flex-col of-hidden">
            <div class="wrapper of-hidden">
              <div class="md:mx-6 md:my-6">
                <SearchBar onSearch={handleSearch} />
              </div>
              <div class="of-y-auto">
                <Collection components={components()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
