import { UserProvider } from '@auth0/nextjs-auth0'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%'
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%'
    },
    h3: {
      fontSize: ['21px', '32px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%'
    },
    small: {
      fontSize: ['12px', '14px'],
      fontWeight: 'regular',
      lineHeight: '110%',
      letterSpacing: '-1%'
    }
  }
})

export default function App ({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  )
}
