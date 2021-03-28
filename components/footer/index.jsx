import { Box, HStack, Stack, Link, Text } from '@chakra-ui/react'

/*
<a href="https://midu.tube" rel="nofollow noreferrer" target="_blank">YouTube</a><span>•</span><a href="https://midu.live" rel="nofollow noreferrer" target="_blank">Twitch</a><span>•</span><a href="https://app.usefathom.com/share/myexkunw/covid-vacuna.vercel.app" rel="nofollow noreferrer" target="_blank">Estadísticas</a><span>•</span><a href="https://github.com/midudev/covid-vacuna/issues/new" rel="nofollow noreferrer" target="_blank">Enviar sugerencia</a></div>
*/

export default function Footer () {
  return (
    <Box backgroundColor='#fafafa' as='footer' role='contentinfo' w='100%' p={4}>
      <Stack align='center' justify='space-between' direction={['column', 'row']}>
        <Link href='https://midu.dev'>
          <HStack>
            <Text>Desarrollado por</Text>
            <img width='92' height='24' src='https://midu.dev/logo.png' alt='midudev' />
          </HStack>
        </Link>

        <HStack>
          <Link isExternal href='https://github.com/midudev/menea.dev'>GitHub</Link>
          <Link isExternal href='https://midu.tube'>YouTube</Link>
          <Link isExternal href='https://midu.live'>Twitch</Link>
          <Link isExternal href='https://github.com/midudev/menea.dev/issues/new'>Enviar sugerencias</Link>

        </HStack>

      </Stack>
    </Box>
  )
}
