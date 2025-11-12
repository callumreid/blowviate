import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blowviate',
  description: 'The blog at blowviate.com'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='min-h-screen bg-zinc-50 text-zinc-900 antialiased'>
        <div className='mx-auto max-w-3xl px-4 py-10'>
          <header className='mb-10'>
            <h1 className='text-3xl font-bold tracking-tight'>Blowviate</h1>
            <p className='text-zinc-600'>Ideas and notes from blowviate.com</p>
          </header>
          <main>{children}</main>
          <footer className='mt-16 text-sm text-zinc-500'>
            © {new Date().getFullYear()} Me
          </footer>
        </div>
      </body>
    </html>
  )
}
