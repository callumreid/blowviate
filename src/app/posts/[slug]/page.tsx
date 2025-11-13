import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug).catch(() => null)
  if (!post) return {}
  return {
    title: `${post.meta.title} • blowviate`,
    description: post.meta.summary ?? ''
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug).catch(() => null)
  if (!post) return notFound()
  return (
    <article className='prose prose-zinc max-w-none'>
      <h1 className='mb-1'>{post.meta.title}</h1>
      <p className='-mt-2 text-sm text-zinc-500'>{new Date(post.meta.date).toLocaleDateString()}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  )
}
