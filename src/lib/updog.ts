export type UpdogNote = {
  id: string
  date: string
  text: string
}

/** Returns recent short notes for the updog section. */
export async function getUpdogNotes(): Promise<UpdogNote[]> {
  const notes: UpdogNote[] = [
    { id: 'n3', date: new Date().toISOString(), text: 'Refined the homepage layout and anchors.' },
    { id: 'n2', date: new Date(Date.now() - 86400000).toISOString(), text: 'Added hub gallery preview to home.' },
    { id: 'n1', date: new Date(Date.now() - 2 * 86400000).toISOString(), text: 'Initial stub content for new sections.' }
  ]
  return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}


