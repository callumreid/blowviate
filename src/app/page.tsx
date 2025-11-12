import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { getHubImages } from '@/lib/hubImages'
import PostCard from '@/components/PostCard'

export default async function Page() {
  const [posts, hubImages] = await Promise.all([getAllPosts(), getHubImages()])
  const gallery = hubImages.slice(0, 6)
  return (
    <div className='space-y-10'>
      <section className='space-y-6'>
        {posts.map(p => <PostCard key={p.slug} post={p} />)}
      </section>
      {gallery.length > 0 ? (
        <section className='space-y-4'>
          <div className='flex items-center justify-between gap-4'>
            <h2 className='text-2xl font-semibold'>Hub Gallery</h2>
            {hubImages.length > gallery.length ? (
              <Link href='/hub' className='text-sm text-zinc-600 hover:text-zinc-900'>
                View all
              </Link>
            ) : null}
          </div>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
            {gallery.map(image => {
              const label = image.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ')
              return (
                <figure key={image} className='overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm'>
                  <img src={`/hub/${image}`} alt={`Hub image ${label}`} className='h-full w-full object-cover' loading='lazy' />
                  <figcaption className='px-3 py-2 text-xs uppercase tracking-wide text-zinc-500'>
                    {label}
                  </figcaption>
                </figure>
              )
            })}
          </div>
        </section>
      ) : null}
    </div>
  )
}
