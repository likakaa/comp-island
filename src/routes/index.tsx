import { Octokit } from 'octokit'
import Collection from '~/components/Collection'
import { Navbar } from '~/components/Navbar'
import SearchBar from '~/components/SearchBar'

export default function Home() {
  const handleSearch = async (_value: string) => {
    const octokit = new Octokit()
    const response = await octokit.request('GET /repos/{owner}/{repo}', {
      owner: 'solidjs',
      repo: 'solid',
    })
    console.log(response)
  }
  return (
    <main class="flex flex-col h-screen overflow-hidden bg-base">
      <div class="h-full flex-auto overflow-overlay">
        <div class="flex h-screen flex-col overflow-hidden">
          <Navbar />
          <div class="flex-auto flex flex-col of-hidden">
            <div class="grid-rows-[max-content_1fr] of-hidden">
              <div class="md:mx-6 md:mt-6">
                <SearchBar onSearch={handleSearch} />
              </div>
              <div class="mt-4 of-y-auto">
                <Collection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
