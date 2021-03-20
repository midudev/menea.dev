import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jfglsyjqbopoyuzfwqoo.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const getStories = async () => {
  const { data: jrcCalc = [], error } = await supabase
    .from('stories')
    .select('*')
    .order('votes', { ascending: false })

  return [error, { stories: jrcCalc }]
}

export const getStoryById = async ({ storyId }) => {
  const { data: stories = [], error } = await supabase
    .from('stories')
    .select('*')
    .eq('id', storyId)
    .limit(1)

  const [story] = stories
  return [error, { story }]
}

export const voteStory = async ({ storyId }) => {
  const [
    errorGettingStoryById,
    { story: { votes } }
  ] = await getStoryById({ storyId })

  if (errorGettingStoryById) return [errorGettingStoryById]

  const { data: storiesUpdated = [], error } = await supabase
    .from('stories')
    .update({ votes: votes + 1 })
    .eq('id', storyId)

  console.log({ storiesUpdated })

  const [story] = storiesUpdated
  return [error, { story }]
}
