export type Project = {
  id: string
  name: string
  description: string
  url?: string
}

/** Returns highlighted projects for the what’s clackin’? section. */
export async function getProjects(): Promise<Project[]> {
  return [
    {
      id: 'p1',
      name: 'Hub Gallery',
      description: 'Static manifest-driven gallery of visual assets.',
      url: '/hub'
    },
    {
      id: 'p2',
      name: 'Bloviate',
      description: 'This site—clean layout, fast rendering, simple sections.'
    }
  ]
}


