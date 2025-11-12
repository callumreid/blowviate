import type { Metadata } from 'next'
import { getHubImages } from '@/lib/hubImages'

export const metadata: Metadata = {
  title: 'Hub Images • Blowviate',
  description: 'A gallery of every Hub image featured on blowviate.com.'
}

export default async function HubPage() {
  const images = await getHubImages()
  return (
    <div className='space-y-6'>
      <header className='space-y-2'>
        <h1 className='text-3xl font-semibold tracking-tight'>Hub Gallery</h1>
        <p className='text-sm text-zinc-600'>All the Hub visuals collected in one place.</p>
      </header>
      {images.length === 0 ? (
        <p className='text-sm text-zinc-600'>No images found.</p>
      ) : (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {images.map(image => {
            const label = image.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ')
            return (
              <figure key={image} className='overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition hover:shadow'>
                <img src={`/hub/${image}`} alt={`Hub image ${label}`} className='h-full w-full object-cover' loading='lazy' />
                <figcaption className='px-4 py-2 text-xs uppercase tracking-wide text-zinc-500'>
                  {label}
                </figcaption>
              </figure>
            )
          })}
        </div>
      )}
    </div>
  )
}
