import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

import Section from '../components/section'
import Paragraph from '../components/paragraph'
import ExperienceBar from '../components/experience'
import Layout from '../components/layouts/article'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('pink.300', 'pink.500')}
          p={3}
          mb={6}
          align="center"
          color="white"
        >
          part time software engineer. full time silly billy.
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h3" variant="page-title">
              oscar czernuszyn
            </Heading>
            <p>
              final year comp sci (honours) / finance student at ANU.
              specialising in artifical intelligence and human computer
              interaction and majoring in quant finance
            </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor={useColorModeValue('gray.800', 'whiteAlpha.900')}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="120px"
              display="inline-block"
              borderRadius="full"
              src="/images/me.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            bio
          </Heading>
          <Paragraph>
            i like to make stuff, especially when that stuff is video games.
            currently in my final year of a bachelor's degree in advanced
            computing (honours) and finance, graduting end of 2025.
            {<br />}
            {<br />}
          </Paragraph>
          <Paragraph>
            outside of coding i like talking about and consuming content (music,
            films, games, theatre, books, etc), learning languages (currently
            japanese) and making models
          </Paragraph>

          <Heading as="h3" variant="section-title">
            experience
          </Heading>
          <ExperienceBar />

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              bg={useColorModeValue('pink.300', 'pink.500')}
              _hover={{
                bg: useColorModeValue('pink.400', 'pink.600')
              }}
              color="white"
            >
              my portfolio
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
