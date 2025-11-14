import { NextRequest, NextResponse } from 'next/server'
import { getComments, addComment } from '@/lib/comments'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ date: string }> }
) {
  const { date } = await params
  const comments = await getComments(date)
  return NextResponse.json(comments)
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ date: string }> }
) {
  const { date } = await params
  const body = await request.json()
  
  const { username, content } = body
  
  if (!content || content.trim().length === 0) {
    return NextResponse.json(
      { error: 'Comment content is required' },
      { status: 400 }
    )
  }
  
  const finalUsername = username && username.trim().length > 0 
    ? username.trim() 
    : 'Bronson'
  
  const comment = await addComment(date, finalUsername, content.trim())
  
  return NextResponse.json(comment, { status: 201 })
}

