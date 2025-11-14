import Link from "next/link";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import { getDailyEntryByDate, getDailyEntries, formatDate } from "@/lib/daily";
import { notFound } from "next/navigation";

export const dynamicParams = true;
export const revalidate = 0;

export async function generateStaticParams() {
  const entries = await getDailyEntries();
  return entries.map((entry) => ({
    date: entry.date,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;
  const entry = await getDailyEntryByDate(date);

  if (!entry) {
    notFound();
  }

  const processedContent = await remark()
    .use(remarkGfm)
    .use(html)
    .process(entry.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="space-y-8 text-center">
      <div className="space-y-4">
        <Link
          href="/daily"
          className="text-sm text-zinc-600 transition hover:text-zinc-900"
        >
          ← back to all entries
        </Link>
        <h1 className="text-3xl font-bold">{formatDate(entry.date)}</h1>
      </div>

      <article
        className="prose prose-zinc prose-sm mx-auto max-w-none text-left"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}
