import { Fragment } from 'react'

import { useUser } from '@auth0/nextjs-auth0'
import { Box, VStack } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Header from 'components/header/index.jsx'
import { voteStory } from 'services/stories'
import { useStories } from 'hooks/useStories'
import StoryCard from 'components/story-card/index.jsx'
import Footer from 'components/footer/index.jsx'

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

  if (userError) return <div>{userError.message}</div>
  if (storiesError) return <div>{storiesError.message}</div>

  return (
    <VStack justify='space-between' minHeight='100vh' w='100%'>
      <Box maxW='960px' w='100%' mx='auto'>
        <Header />
        {
        isLoading
          ? <div>Loading...</div>
          : null
      }
        <VStack spacing={4} align='stretch' w='100%'>
          {stories.map(story =>
            <Fragment key={story.id}>
              <StoryCard
                {...story}
                insertedAt={story.inserted_at}
                handleVote={createHandleClick}
              />
              <Divider />
            </Fragment>
          )}
        </VStack>
      </Box>
      <Footer />
    </VStack>
  )
}
