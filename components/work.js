import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Projects</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    mb={4}
    border="2px solid"
    borderColor={useColorModeValue('black', 'white')}
  />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
