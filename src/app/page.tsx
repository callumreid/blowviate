import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export default async function Page() {
  const posts = await getAllPosts()
  return (
    <div className='space-y-6'>
      {posts.map(p => <PostCard key={p.slug} post={p} />)}
    </div>
  )
}
