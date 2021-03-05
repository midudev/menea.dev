import { useUser } from '@auth0/nextjs-auth0'
import { Spacer, Flex } from '@chakra-ui/layout'

export default function Header () {
  const { user } = useUser()

  return (
    <Flex align='center' as='header' h='64px'>
      <h2>menea.dev</h2>

      <Spacer />

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
