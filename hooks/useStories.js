import { useEffect, useState } from 'react'
import { getStories } from 'services/stories'

export const useStories = () => {
  const [storiesError, setStoriesError] = useState(null)
  const [stories, setStories] = useState([])

  useEffect(() => {
    const getStoriesFromService = async () => {
      const [err, { stories }] = await getStories()
      setStoriesError(err)
      setStories(stories)
    }

    getStoriesFromService()
  }, [])

  return {
    setStories,
    setStoriesError,
    stories,
    storiesError
  }
}
