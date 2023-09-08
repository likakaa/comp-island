import SearchBar from './SearchBar'
import Collection from './Collection'
import { Octokit } from 'octokit'

export default function Main() {
  const handleSearch = async (e) => {
    console.log('handleSearch', e)
    // await search(e)
  }

  const search = async (key: string) => {
    const octokit = new Octokit()
    // get solidjs/solid repo info
    const result = await octokit.request('GET /search/repositories', {
      q: key,
      sort: 'stars',
      order: 'desc',
      per_page: 10,
    })
    console.log('result', result)
  }

  return (
    <main class="flex flex-auto flex-col of-hidden">
      <div class="grid-rows-[max-content_1fr] of-hidden">
        <div class="md:mx-6 md:mt-6">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div class="mt-4 of-y-auto">
          <Collection />
        </div>
      </div>
    </main>
  )
}
