import { useUser } from '@auth0/nextjs-auth0'
import { Box } from '@chakra-ui/layout'
import axios from 'axios'
import { useRouter } from 'next/router'
import Header from '../components/header/index.jsx'

const stories = [
  {
    id: 1,
    title: 'Curso de Svelte Gratis y Desde Cero 📚'
  },
  {
    id: 2,
    title: 'Bootcamp Full Stack Gratis: Aprende Desarrollo Full Stack ⚡'
  },
  {
    id: 3,
    title: 'Cómo detectar ad blockers con JavaScript'
  },
  {
    id: 4,
    title: 'Adiós Google Analytics. Alternativas para tener estadísticas en tu web'
  },
  {
    id: 5,
    title: 'TOP 7 Libros 📚 para Aprender y Dominar JAVASCRIPT (Gratis)'
  },
  {
    id: 6,
    title: 'Crea un calendario 📆 con tres líneas de CSS'
  },
  {
    id: 7,
    title: 'box-sizing: border-box: ¿Qué es y para qué sirve?'
  },
  {
    id: 8,
    title: 'Las alternativas de Webpack, empaquetadores de aplicaciones web para 2021 📦'
  },
  {
    id: 9,
    title: "Cómo arreglar el mensaje 'xcrun: error: invalid active developer path, missing xcrun' de macOS"
  },
  {
    id: 10,
    title: 'Resolviendo promesas en Svelte con {#await}'
  }
]

export default function Home () {
  const { user, error, isLoading } = useUser()
  const router = useRouter()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  const createHandleClick = (id) => async () => {
    if (!user) {
      router.push('/api/auth/login')
      return
    }

    try {
      const response = await axios.post('/api/votes', { id })
      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Box maxW='960px' mx='auto'>
      <Header />
      {stories.map(story =>
        <div key={story.id}>
          <strong>{story.title}</strong>
          <button onClick={createHandleClick(story.id)}>Vote</button>
        </div>
      )}
    </Box>
  )
}
