import { AsyncFzf } from 'fzf'
import { components } from './components'

const fzf = new AsyncFzf(components, {
  casing: 'case-insensitive',
  fuzzy: 'v1',
  // support name, type, framework, description
  selector: (v) => `${v.name} ${v.type} ${v.framework} ${v.description}`,
})

export const filterComponents = async (q: string) => {
  const result = await fzf.find(q)
  return result.map((i) => i.item)
}
