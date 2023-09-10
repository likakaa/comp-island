import { DarkSwitcher } from './DarkSwitcher'

export function Navbar() {
  return (
    <nav class="relative z-10 flex flex-none gap-4 border-b p4 text-xl border-base bg-base">
      <div class="flex-auto" />
      <h1 class="pointer-events-none absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-xl font-light tracking-2px">
        组件岛
      </h1>
      <a
        class="i-carbon-logo-github flex-none icon-button"
        href="https://github.com/comp-island/comp-island"
        target="_blank"
        title="GitHub"
      />
      <DarkSwitcher flex-none />
    </nav>
  )
}
