import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import theme from '../styles/theme'

export default function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}
