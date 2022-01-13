import Head from 'next/head'
import { Container, Box } from '@chakra-ui/react'

// eslint-disable-next-line no-unused-vars
export default function Main({ children, router }) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Janvier Uwirgaiye - Homepage</title>
      </Head>

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}
