import fs from 'fs'
import path from 'path'

const COMMENTS_DIR = path.join(process.cwd(), 'content/comments')

export interface Comment {
  id: string
  dailyDate: string
  username: string
  content: string
  timestamp: string
}

function ensureCommentsDir() {
  if (!fs.existsSync(COMMENTS_DIR)) {
    fs.mkdirSync(COMMENTS_DIR, { recursive: true })
  }
}

function getCommentsFilePath(dailyDate: string): string {
  return path.join(COMMENTS_DIR, `${dailyDate}.json`)
}

export async function getComments(dailyDate: string): Promise<Comment[]> {
  ensureCommentsDir()
  const filePath = getCommentsFilePath(dailyDate)
  
  if (!fs.existsSync(filePath)) {
    return []
  }
  
  const data = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(data)
}

export async function addComment(
  dailyDate: string,
  username: string,
  content: string
): Promise<Comment> {
  ensureCommentsDir()
  const filePath = getCommentsFilePath(dailyDate)
  
  const comments = await getComments(dailyDate)
  
  const newComment: Comment = {
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    dailyDate,
    username,
    content,
    timestamp: new Date().toISOString()
  }
  
  comments.push(newComment)
  
  fs.writeFileSync(filePath, JSON.stringify(comments, null, 2))
  
  return newComment
}

