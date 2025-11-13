export type DailyEntry = {
  date: string
  text: string
}

/** Returns daily double entries with the most recent first. */
export async function getDailyDoubleEntries(): Promise<DailyEntry[]> {
  const entries: DailyEntry[] = [
    { date: new Date().toISOString(), text: 'Dialed in section layout and navigation anchors.' },
    { date: new Date(Date.now() - 86400000).toISOString(), text: 'Sketched content structure for updog and projects.' }
  ]
  return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}


