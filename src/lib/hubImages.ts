import manifest from './hubManifest.json'

/**
 * Returns the list of hub image filenames located in the public assets directory.
 */
export const getHubImages = async () => {
  return manifest as string[]
}
