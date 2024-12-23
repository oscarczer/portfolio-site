import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="pink.400" p={3} mb={6} align="center">
        welcome to my domain
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Oscar Czernuszyn
          </Heading>
          <p>Full stack software engineer. Aspiring game developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
