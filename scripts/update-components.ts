import { Octokit } from 'octokit'
import fs from 'fs-extra'
import eslint from 'eslint'
import { repos } from '../src/data/repos'
import type { ComponentInfo } from '~/data/types'

async function run() {
  const gh = new Octokit()
  const components: ComponentInfo[] = []
  for (const r of repos) {
    const [owner, repo] = r.repository.split('/').slice(-2)
    const { data } = await gh.rest.repos.get({
      owner,
      repo,
    })
    components.push({
      name: data.name,
      author: data.owner.login,
      authorAvatar: data.owner.avatar_url,
      authorUrl: data.owner.html_url,
      topics: data.topics,
      type: r.type,
      framework: r.framework,
      repository: r.repository,
      defaultBranch: data.default_branch,
      homepage: data.homepage || '',
      description: data.description || '',
      language: data.language || '',
      license: data.license?.name || '',
      openIssues: data.open_issues_count,
      stars: data.stargazers_count,
      createAt: data.created_at,
      updateAt: data.updated_at,
    })
    // path: src/data/components.ts
    const final = `/* eslint-disable prettier/prettier */\n\n// DO NOTE EDIT THIS FILE, IT IS GENERATED AUTOMATICALLY \n\nimport type { ComponentInfo } from './types'\n\nexport const components: ComponentInfo[] = ${JSON.stringify(
      components,
      null,
      2,
    )}\n`

    // run eslint fix command
    const linter = new eslint.ESLint({
      fix: true,
    })
    const results = await linter.lintText(final)
    await eslint.ESLint.outputFixes(results)
    await fs.writeFile('src/data/components.ts', results[0].output!, 'utf-8')
  }
  console.info('update components successfully!')
}

run()
