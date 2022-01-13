import { Container, Box, Heading } from '@chakra-ui/react'

export default function Page() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} textAlign={'center'}>
        Hello, I&apos;m full-stack developer born in Burundi, based in Canada!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as={'h2'} variant="page-title">
            Janvier Uwiragiye
          </Heading>
          <p>Software Developer | Web Designer | Computer Scientist </p>
        </Box>
      </Box>
    </Container>
  )
}
