import { createSignal } from 'solid-js'
import { useNavigate, useParams } from 'solid-start'
import { fetchReadme } from '~/api/repo'
import ReadMe from '~/components/ReadMe'

export default function () {
  const params = useParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const [readme, setReadme] = createSignal('')

  const getReadme = async () => {
    const mdStr = await fetchReadme('markdown-it', 'markdown-it', 'master')
    setReadme(mdStr)
  }
  getReadme()
  return (
    <div>
      <h1>Repo: {params.id}</h1>
      <button onClick={goBack}>Go back</button>
      <ReadMe content={readme()} />
    </div>
  )
}
