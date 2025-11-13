import fs from 'fs'
import path from 'path'

const DAILY_DIR = path.join(process.cwd(), 'content/daily')

export interface DailyEntry {
  date: string
  content: string
  filename: string
}

export async function getDailyEntries(): Promise<DailyEntry[]> {
  if (!fs.existsSync(DAILY_DIR)) {
    return []
  }

  const files = fs.readdirSync(DAILY_DIR)
    .filter(file => file.endsWith('.md'))
    .sort()
    .reverse()

  return files.map(filename => {
    const filePath = path.join(DAILY_DIR, filename)
    const content = fs.readFileSync(filePath, 'utf-8')
    const date = filename.replace('.md', '')

    return {
      date,
      content,
      filename
    }
  })
}

export async function getLatestDailyEntry(): Promise<DailyEntry | null> {
  const entries = await getDailyEntries()
  return entries.length > 0 ? entries[0] : null
}

export async function getDailyEntryByDate(date: string): Promise<DailyEntry | null> {
  const entries = await getDailyEntries()
  return entries.find(entry => entry.date === date) || null
}

export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-')
  const date = new Date(`${year}-${month}-${day}T00:00:00Z`)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).toLowerCase()
}

