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
      fontSize: ['21px', '24px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%'
    },
    small: {
      color: '#aaa',
      fontSize: ['12px', '14px'],
      fontWeight: '500',
      lineHeight: '110%',
      letterSpacing: '-1%'
    },
    verySmall: {
      color: '#444',
      fontSize: ['8px', '12px'],
      fontWeight: '500',
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
