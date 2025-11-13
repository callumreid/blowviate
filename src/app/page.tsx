import Link from 'next/link'
import { getHubImages } from '@/lib/hubImages'
import { getLatestDailyEntry, formatDate } from '@/lib/daily'

export default async function Page() {
  const hubImages = await getHubImages()
  const gallery = hubImages.slice(0, 6)
  const latestDaily = await getLatestDailyEntry()

  return (
    <div className='space-y-12'>
      <section className='space-y-4'>
        <Link href='/daily' className='block text-center text-lg font-semibold transition hover:text-zinc-700'>
          daily double
        </Link>
        <div className='space-y-3 rounded-lg border border-zinc-200 bg-white p-4'>
          {latestDaily ? (
            <div className='space-y-3'>
              <p className='text-sm text-zinc-500'>{formatDate(latestDaily.date)}</p>
              <div className='prose prose-sm max-w-none text-sm text-zinc-600'>
                {latestDaily.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className='text-zinc-600'>{paragraph}</p>
                ))}
              </div>
            </div>
          ) : (
            <div className='text-sm text-zinc-600'>
              <p className='font-medium text-zinc-900'>check back soon</p>
              <p className='mt-1'>daily updates coming soon</p>
            </div>
          )}
        </div>
      </section>

      {gallery.length > 0 ? (
        <section className='space-y-4'>
          <div className='flex items-center justify-between gap-4'>
            <h2 className='text-lg font-semibold'>hub gallery</h2>
            {hubImages.length > gallery.length ? (
              <Link href='/hub' className='text-sm text-zinc-600 hover:text-zinc-900'>
                view all
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
