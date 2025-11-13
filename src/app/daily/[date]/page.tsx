import Link from 'next/link'
import { getDailyEntryByDate, getDailyEntries, formatDate } from '@/lib/daily'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const entries = await getDailyEntries()
  return entries.map(entry => ({
    date: entry.date
  }))
}

export default async function Page({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params
  const entry = await getDailyEntryByDate(date)

  if (!entry) {
    notFound()
  }

  return (
    <div className='space-y-8'>
      <div className='space-y-4 text-center'>
        <Link href='/daily' className='text-sm text-zinc-600 transition hover:text-zinc-900'>
          ← back to all entries
        </Link>
        <h1 className='text-3xl font-bold'>{formatDate(entry.date)}</h1>
      </div>

      <article className='prose prose-sm max-w-none space-y-4 text-center'>
        {entry.content.split('\n\n').map((paragraph, i) => (
          <p key={i} className='text-zinc-700'>
            {paragraph}
          </p>
        ))}
      </article>
    </div>
  )
}

