import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className='group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow'>
      <time className='block text-xs text-zinc-500'>{new Date(post.date).toLocaleDateString()}</time>
      <h2 className='mt-2 text-xl font-semibold'>
        <Link href={`/posts/${post.slug}`} className='hover:underline'>
          {post.title}
        </Link>
      </h2>
      {post.summary ? <p className='mt-2 text-zinc-600'>{post.summary}</p> : null}
    </article>
  )
}
