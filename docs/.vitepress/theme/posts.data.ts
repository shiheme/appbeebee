import { createContentLoader } from 'vitepress'
import type { Post } from './types'

declare const data: Post[]
export { data }

export default createContentLoader('posts/*/*/*.md', {
  includeSrc: true, // include raw markdown source?
  render: true,     // include rendered full page HTML?
  excerpt: true, 
  transform(rawData): Post[] {
    return rawData.map(({ url, frontmatter }) => {
      frontmatter.readTime = 0
      return {
        frontmatter: frontmatter,
        relativePath: url,
      }
    })
      .sort((a, b) => {
        return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
      })
  }
})


