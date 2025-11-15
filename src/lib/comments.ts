import { supabase } from './supabase'

export interface Comment {
  id: string
  daily_date: string
  username: string
  content: string
  created_at: string
}

export async function getComments(dailyDate: string): Promise<Comment[]> {
  const { data, error } = await supabase
    .from('comments')
    .select('*')
    .eq('daily_date', dailyDate)
    .order('created_at', { ascending: true })
  
  if (error) {
    console.error('Error fetching comments:', error)
    return []
  }
  
  return data || []
}

export async function addComment(
  dailyDate: string,
  username: string,
  content: string
): Promise<Comment> {
  const { data, error } = await supabase
    .from('comments')
    .insert({
      daily_date: dailyDate,
      username,
      content
    })
    .select()
    .single()
  
  if (error) {
    console.error('Error adding comment:', error)
    throw new Error('Failed to add comment')
  }
  
  return data
}

