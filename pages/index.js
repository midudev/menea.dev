import { useUser } from '@auth0/nextjs-auth0'
import { Box, VStack } from '@chakra-ui/layout'
import { Button, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Header from '../components/header/index.jsx'
import { voteStory } from '../services/stories'
import { useStories } from '../hooks/useStories'

export default function Home () {
  const {
    setStories,
    setStoriesError,
    stories,
    storiesError
  } = useStories()

  const { user, error: userError, isLoading } = useUser()
  const router = useRouter()

  const createHandleClick = (storyId) => async () => {
    if (!user) {
      router.push('/api/auth/login')
      return
    }

    const [error, { story: storyUpdated }] = await voteStory({ storyId })

    error
      ? setStoriesError(error)
      : setStories(stories =>
        stories.map(story => story.id === storyId
          ? storyUpdated
          : story
        ))
  }

  const getDomainFromUrl = (url) => {
    const urlInstance = new URL(url)
    return urlInstance.host
  }

  if (userError) return <div>{userError.message}</div>
  if (storiesError) return <div>{storiesError.message}</div>

  return (
    <Box maxW='960px' mx='auto'>
      <Header />
      {
        isLoading
          ? <div>Loading...</div>
          : null
      }
      <VStack spacing={4} align='stretch'>
        {stories.map(story =>
          <Box key={story.id} p='4' border='1px solid #eee' borderRadius='4px'>
            <Text as='h2' textStyle='h3'>{story.title}</Text>
            <Text as='h5' textStyle='small'>{getDomainFromUrl(story.url)}</Text>
            <span>{story.votes}</span>
            <Button onClick={createHandleClick(story.id)}>Vote</Button>
            <Text as='time' textStyle='small'>{new Date(story.inserted_at).toUTCString()}</Text>
          </Box>
        )}
      </VStack>
    </Box>
  )
}
