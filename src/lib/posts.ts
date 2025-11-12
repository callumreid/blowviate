import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export type PostMeta = {
  slug: string
  title: string
  date: string
  summary?: string
}

const postsDir = path.join(process.cwd(), 'content', 'posts')

export const getPostSlugs = () => {
  return fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
}

export const getAllPosts = async (): Promise<PostMeta[]> => {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => {
    const fullPath = path.join(postsDir, slug)
    const file = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(file)
    return {
      slug: slug.replace(/\.md$/, ''),
      title: data.title ?? 'Untitled',
      date: data.date ?? '',
      summary: data.summary ?? ''
    } as PostMeta
  })
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  return posts
}

export const getPostBySlug = async (slug: string) => {
  const fullPath = path.join(postsDir, `${slug}.md`)
  const file = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(file)
  const processed = await remark().use(html).process(content)
  const htmlContent = processed.toString()
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      summary: data.summary ?? ''
    },
    html: htmlContent
  }
}
