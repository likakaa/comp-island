const proxyURL = 'https://ghproxy.com/'
export async function fetchRaw(owner: string, repo: string, defaultBranch: string, fileName: string) {
  const url = `${proxyURL}https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/${fileName}`
  const response = await fetch(url)
  let text = ''
  if (response.ok) {
    text = await response.text()
  }
  return text
}
