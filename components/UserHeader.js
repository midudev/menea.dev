import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link
} from '@chakra-ui/react'
import { useAuthUser, withAuthUser } from 'next-firebase-auth'
import NextLink from 'next/link'

function UserHeader () {
  const { photoURL, displayName, id, signOut } = useAuthUser()
  console.log({ photoURL, displayName, id, signOut })

  if (!id) {
    return (
      <NextLink href='/auth' passHref>
        <Link>
          Iniciar sesión
        </Link>
      </NextLink>
    )
  }

  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded='full'
        variant='link'
        cursor='pointer'
        minW={0}
      >
        <Avatar
          size='sm'
          src={photoURL}
        />
      </MenuButton>
      <MenuList>
        <MenuItem>{displayName}</MenuItem>
        <MenuItem>Perfil</MenuItem>
        <MenuItem>Favoritos</MenuItem>
        <MenuDivider />
        <MenuItem onClick={signOut}>
          Cerrar Sesión
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default withAuthUser()(UserHeader)
