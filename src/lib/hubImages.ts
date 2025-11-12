import fs from 'node:fs'
import path from 'node:path'

const hubDir = path.join(process.cwd(), 'public', 'hub')
const allowedExtensions = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.heic'])

/**
 * Returns the list of hub image filenames located in the public assets directory.
 */
export const getHubImages = async () => {
  if (!fs.existsSync(hubDir)) return [] as string[]
  const entries = await fs.promises.readdir(hubDir, { withFileTypes: true })
  const files = entries
    .filter(entry => entry.isFile() && allowedExtensions.has(path.extname(entry.name).toLowerCase()))
    .map(entry => entry.name)
  files.sort((a, b) => a.localeCompare(b))
  return files
}
