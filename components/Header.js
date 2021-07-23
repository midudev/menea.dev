import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import UserHeader from 'components/UserHeader.js'

const HEADER_LINKS = [{
  href: '/',
  literal: 'Portada'
}, {
  href: '/nuevas',
  literal: 'Nuevas'
}]

const NavLink = ({ href, literal }) => {
  const { pathname } = useRouter()
  const isActive = pathname === href

  const activeBackgroundColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <NextLink href={href} passHref>
      <Link
        background={isActive ? activeBackgroundColor : ''}
        color='#555'
        px={2}
        py={1}
        rounded='md'
        fontWeight='bold'
        _hover={{
          textDecoration: 'none',
          background: useColorModeValue('gray.200', 'gray.700')
        }}
        href={href}
      >
        {literal}
      </Link>
    </NextLink>
  )
}

export default function Header () {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems='center' justifyContent='space-between'>
          <IconButton
            size='md'
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label='Open Menu'
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems='center'>
            <Box fontWeight='bold'>menea.dev</Box>
            <HStack
              as='nav'
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {HEADER_LINKS.map(link => <NavLink key={link.href} {...link} />)}
            </HStack>
          </HStack>
          <Flex alignItems='center'>
            <UserHeader />
          </Flex>
        </Flex>

        {isOpen
          ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as='nav' spacing={4}>
                {HEADER_LINKS.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
            )
          : null}
      </Box>
    </>
  )
}
