import Head from 'next/head'
import { Box, Container } from '@emotion/react'

const Layout = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale" />
        <title>Janvier Uwiragiye - Homepage</title>
      </Head>
      <Container maxW={'container.md'} pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
