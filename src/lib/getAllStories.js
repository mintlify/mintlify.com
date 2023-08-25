import glob from 'fast-glob'
import * as path from 'path'

async function importStory(articleFilename) {
  let {
    meta,
    about,
    default: component,
  } = await import(`../pages/customers/${articleFilename}`)
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    ...about,
    component,
  }
}

export async function getAllStories() {
  let storyFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/customers'),
  })

  let stories = await Promise.all(storyFilenames.map(importStory))

  return stories.sort((a, z) => a.priority - z.priority)
}
