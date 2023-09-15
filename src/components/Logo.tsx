import type { JSX } from 'solid-js'

export function Logo(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        stroke-width={3}
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M28.16 34.53H4.5l11.83-15l3.28 4.15l7.81-10.24L43.5 34.53Zm0 0l-8.55-10.82"
      />
    </svg>
  )
}
export default Logo
