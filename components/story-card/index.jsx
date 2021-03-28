import { Box, Text, Link, VStack, HStack } from '@chakra-ui/react'
import { ChevronUpIcon } from '@chakra-ui/icons'
import useTimeAgo from 'hooks/useTimeAgo.js'

const getDomainFromUrl = (url) => {
  const urlInstance = new URL(url)
  return urlInstance.host
}

export default function StoryCard ({ handleVote, insertedAt, id, title, url, votes }) {
  const {
    dateTime,
    timeago
  } = useTimeAgo({ timestamp: new Date(insertedAt) })

  return (
    <HStack p={4} justify='space-between'>
      <div>
        <Text as='h5' textStyle='small'>{getDomainFromUrl(url)}</Text>
        <Text as='h2' textStyle='h3' py={2}>
          <Link href='https://chakra-ui.com' isExternal>{title}</Link>
        </Text>
        <HStack>
          <Text as='span' textStyle='verySmall' _after={{ content: '"•"', paddingLeft: '8px' }}>enviado por Vedaskyes</Text>
          <Text as='time' dateTime={dateTime} title={dateTime} textStyle='verySmall'>
            {timeago}
          </Text>
        </HStack>
      </div>

      <Box border='1px solid #ccc' borderRadius='8px' as='button' onClick={handleVote(id)}>
        <VStack p={2}>
          <ChevronUpIcon />
          <span>{votes}</span>
          <Text as='small' textStyle='small'>Votar</Text>
        </VStack>
      </Box>
    </HStack>
  )
}
