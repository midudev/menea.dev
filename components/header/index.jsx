import { useUser } from '@auth0/nextjs-auth0'
import { Spacer, Flex, Text } from '@chakra-ui/layout'

export default function Header () {
  const { user } = useUser()

  return (
    <Flex justify='space-between' as='header' h='64px' p={4} w='100%'>
      <Text as='h2' fontWeight='bold'> &lt;/&gt; menea.dev</Text>

      {user
        ? (
          <span>
            Welcome {user.name}! <a href='/api/auth/logout'>Cerrar sesión</a>
          </span>
          )
        : <a href='/api/auth/login'>Entrar</a>}
    </Flex>
  )
}
