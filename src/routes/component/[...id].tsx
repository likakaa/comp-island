import { createSignal, onMount } from 'solid-js'
import { useNavigate, useParams } from 'solid-start'
import { fetchReadme } from '~/api/repo'
import Readme from '~/components/Readme'

export default function () {
  const params = useParams()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  const [readme, setReadme] = createSignal('')

  const [owner, repo, branch] = params.id.split('/')

  const getReadme = async () => {
    const mdStr = await fetchReadme(owner, repo, branch)
    setReadme(mdStr)
    // console.log(mdStr)
  }
  onMount(async () => {
    await getReadme()
  })
  return (
    <div class="of-y-scroll of-x-hidden">
      <button onClick={goBack}>Go back</button>
      <Readme content={readme()} />
    </div>
  )
}
