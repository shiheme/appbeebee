// vitepress官方建议的获取文章方法。本身具有缓存机制
import { createContentLoader } from 'vitepress'
import type { Post } from './types'

declare const data: Post[]
export { data }

export default createContentLoader('posts/*/*/*.md', {
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


