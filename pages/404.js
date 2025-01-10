import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

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
        <Button
          as={NextLink}
          href="/"
          scroll={false}
          rightIcon={<ChevronRightIcon />}
          bg={useColorModeValue('pink.300', 'pink.500')}
          _hover={{
            bg: useColorModeValue('pink.400', 'pink.600')
          }}
          color="white"
        >
          go home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
