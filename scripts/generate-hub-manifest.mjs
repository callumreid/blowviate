import { promises as fs } from 'node:fs'
import path from 'node:path'

const cwd = process.cwd()
const hubDir = path.join(cwd, 'public', 'hub')
const outFile = path.join(cwd, 'src', 'lib', 'hubManifest.json')
const allowed = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.heic'])

async function main() {
  try {
    const entries = await fs.readdir(hubDir, { withFileTypes: true })
    const files = entries
      .filter(entry => entry.isFile() && allowed.has(path.extname(entry.name).toLowerCase()))
      .map(entry => entry.name)
      .sort((a, b) => a.localeCompare(b))
    await fs.mkdir(path.dirname(outFile), { recursive: true })
    await fs.writeFile(outFile, JSON.stringify(files, null, 2), 'utf8')
    console.log(`[hub] Wrote ${files.length} entries to ${path.relative(cwd, outFile)}`)
  } catch {
    await fs.mkdir(path.dirname(outFile), { recursive: true })
    await fs.writeFile(outFile, '[]', 'utf8')
    console.warn('[hub] No hub images found; wrote empty manifest')
  }
}

main()


