import { AsyncFzf } from 'fzf'
import { components } from './components'

const fzf = new AsyncFzf(components, {
  casing: 'case-insensitive',
  fuzzy: 'v1',
  // support name, type, framework, description
  selector: (v) => `${v.name} ${v.type} ${v.framework} ${v.description}`,
})

export const filterComponents = async (q: string) => {
  if (!q) return components
  const trimmed = q.trim()
  const result = await fzf.find(trimmed)
  return result.map((i) => i.item)
}

export const fileterComponentByID = (id: number) => {
  return components.find((i) => i.id === id)
}
