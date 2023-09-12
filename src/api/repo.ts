export async function fetchReadme(owner: string, repo: string, defaultBranch: string) {
  const proxyURL = 'https://ghproxy.com/'
  const url = `${proxyURL}https://raw.githubusercontent.com/${owner}/${repo}/${defaultBranch}/README.md`
  const response = await fetch(url)
  if (!response.ok) {
    console.error(url)
    throw new Error(response.statusText)
  }
  const text = await response.text()
  return text
}
