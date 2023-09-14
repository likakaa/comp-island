// @refresh reload
import { Suspense, onMount } from 'solid-js'
import { Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from 'solid-start'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './styles/root.css'
import Navbar from './components/Navbar'

export default function Root() {
  onMount(() => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const setting = localStorage.getItem('theme') || 'auto'
    if (setting === 'dark' || (prefersDark && setting !== 'light')) {
      document.documentElement.classList.toggle('dark', true)
    }
  })
  return (
    <Html lang="en">
      <Head>
        <Title>组件岛</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="description" content="组件岛" />
        <Link rel="icon" href="/favicon.svg" />
      </Head>
      <Body class="flex bg-base color-base">
        <Suspense>
          <ErrorBoundary>
            <Navbar />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
