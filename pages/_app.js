import '../styles/globals.css'
import initAuth from '../initAuth'
import { ChakraProvider } from "@chakra-ui/react"
import Header from '../components/Header.js'

initAuth()

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Header {...pageProps} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
