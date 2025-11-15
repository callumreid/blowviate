'use client'

import { useState, useEffect } from 'react'

interface Comment {
  id: string
  daily_date: string
  username: string
  content: string
  created_at: string
}

export default function CommentSection({ date }: { date: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchComments()
  }, [date])

  async function fetchComments() {
    setIsLoading(true)
    try {
      const res = await fetch(`/api/comments/${date}`)
      const data = await res.json()
      setComments(data)
    } catch (error) {
      console.error('Failed to fetch comments:', error)
    } finally {
      setIsLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!content.trim()) return
    
    setIsSubmitting(true)
    
    try {
      const res = await fetch(`/api/comments/${date}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username.trim() || 'Bronson',
          content: content.trim()
        })
      })
      
      if (res.ok) {
        setContent('')
        setUsername('')
        await fetchComments()
      }
    } catch (error) {
      console.error('Failed to post comment:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  function formatTimestamp(timestamp: string) {
    const date = new Date(timestamp)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).toLowerCase()
  }

  return (
    <div className="mt-12 space-y-6 border-t border-zinc-200 pt-8">
      <h2 className="text-xl font-semibold">comments</h2>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username (default: Bronson)"
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm transition focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="leave a comment..."
            rows={3}
            required
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm transition focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting || !content.trim()}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? 'posting...' : 'post comment'}
        </button>
      </form>

      <div className="space-y-4">
        {isLoading ? (
          <p className="text-sm text-zinc-500">loading comments...</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-zinc-500">no comments yet. be the first!</p>
        ) : (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="rounded-lg border border-zinc-200 bg-white p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold text-zinc-900">
                  {comment.username}
                </span>
                <span className="text-xs text-zinc-500">
                  {formatTimestamp(comment.created_at)}
                </span>
              </div>
              <p className="text-sm text-zinc-700 whitespace-pre-wrap">
                {comment.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

