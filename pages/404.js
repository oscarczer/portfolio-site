import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">404: not found</Heading>
      <Text>
        the page you were looking for doesnt currently exist and maybe never
        will
        {<br />}
        {<br />}
        sorry if you were excited about it, im sure i wouldve been too :(
        {<br />}
        {<br />}
      </Text>

      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          maxWidth="320px"
          display="inline-block"
          borderRadius="lg"
          src="/images/hard-link.JPG"
          alt="Profile Image"
        />
      </Box>

      <Divider my={4} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          go home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
