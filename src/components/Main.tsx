import { Show, createSignal, mergeProps } from 'solid-js'
import SearchBar from './SearchBar'


export default function Main() {
  const handleInput= (e)=>{
    console.log('handleInput',e)
  }

  return (
    <main class="flex flex-auto flex-col of-hidden">
    <div class="grid-rows-[max-content_1fr] of-hidden">
      <div class="md:mx-6 md:mt-6">
        <SearchBar onInput={handleInput}/>
      </div>
      <div class="mt-6 of-y-auto">
        <div class="mt-6 px-2 text-lg op-50">Result</div>
        <div class="collections-list grid gap-2 of-hidden p-2 p-2">
          <a class="hover:text-primary !hover:border-primary relative grid grid-cols-[1fr_90px] translate-z-0 items-center gap2 border p3 transition-all border-base color-base hover:(shadow)">
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
          </a>
          <a class="hover:text-primary !hover:border-primary relative grid grid-cols-[1fr_90px] translate-z-0 items-center gap2 border p3 transition-all border-base color-base hover:(shadow)">
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
          </a>
          <a class="hover:text-primary !hover:border-primary relative grid grid-cols-[1fr_90px] translate-z-0 items-center gap2 border p3 transition-all border-base color-base hover:(shadow)">
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
            <p>xxxx</p>
          </a>
        </div>
      </div>
    </div>
  </main>
  )
}
