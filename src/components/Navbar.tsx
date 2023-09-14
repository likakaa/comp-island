import { Show } from 'solid-js'
import { useLocation } from 'solid-start'
import { DarkSwitcher } from './DarkSwitcher'
import Logo from './Logo'

export default function Navbar() {
  const location = useLocation()
  const isHomepage = () => location.pathname === '/'
  return (
    <header class="fixed w-full p-4 z-10 backdrop-blur-xl backdrop-saturate-150 border-b border-black/5">
      <div class="max-auto">
        <nav class="flex items-center text-base">
          <Show when={!isHomepage()}>
            <a href="/" class="icon-button flex-none i-carbon:arrow-left" />
          </Show>
          <div class="flex-auto" />
          <a
            href="/"
            class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center tracking-2px pointer-events-none"
          >
            <Logo class="text-2xl mr-2 op70" />
            <h1 class="text-xl font-light">组件岛</h1>
          </a>
          <div class="flex items-center gap-3">
            <a
              class="i-carbon-logo-github icon-button"
              href="https://github.com/comp-island/comp-island"
              target="_blank"
              title="GitHub"
            />
            <DarkSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
