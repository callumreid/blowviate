import Link from "next/link";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "blowviate",
  description: "the blog at blowviate.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <header className="mb-12 space-y-6 text-center">
            <Link
              href="/"
              className="inline-block transition hover:text-zinc-700"
            >
              <h1 className="text-4xl font-bold tracking-tight">blowviate</h1>
            </Link>
            <nav className="flex justify-center gap-6 text-sm text-zinc-600">
              <Link href="/projects" className="transition hover:text-zinc-900">
                what's clackin'?
              </Link>
              <Link href="/daily" className="transition hover:text-zinc-900">
                daily double
              </Link>
              <Link href="/hub" className="transition hover:text-zinc-900">
                hub gallery
              </Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-16 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Me
          </footer>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
