import React from 'react'
import { Container, SimpleGrid } from '@chakra-ui/react'
import fetchNewArticles from 'services/fetch-new-articles'
import Card from 'components/Card.js'
import Head from 'next/head'

export default function Nuevas ({ posts }) {
  return (
    <>
      <Head>
        <title>Nuevas | menea.dev</title>
      </Head>
      <Container maxW='100%'>
        <SimpleGrid minChildWidth='400px' columns={4} spacing={10}>
          {posts.map(post => (
            <Card
              title={post.title}
              image={post.image}
              readtime={post.readtime}
              key={post.id}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  )
}

export async function getServerSideProps () {
  const { posts } = await fetchNewArticles()

  return {
    props: {
      posts
    }
  }
}
