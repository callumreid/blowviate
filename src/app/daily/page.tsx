import Link from "next/link";
import { getDailyEntries, formatDate } from "@/lib/daily";

export default async function Page() {
  const entries = await getDailyEntries();

  return (
    <div className="space-y-8 text-center">
      <h1 className="text-3xl font-bold">daily double</h1>
      <p className="text-zinc-600">baow baow baowwwwwwwwww</p>

      {entries.length > 0 ? (
        <div className="space-y-3">
          {entries.map((entry) => (
            <Link
              key={entry.date}
              href={`/daily/${entry.date}`}
              className="block rounded-lg border border-zinc-200 bg-white p-4 transition hover:bg-zinc-50"
            >
              <p className="text-sm font-medium text-zinc-900">
                {formatDate(entry.date)}
              </p>
              <p className="mt-2 line-clamp-2 text-sm text-zinc-600">
                {entry.content.substring(0, 100)}...
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-500">no daily entries yet.</p>
        </div>
      )}
    </div>
  );
}
