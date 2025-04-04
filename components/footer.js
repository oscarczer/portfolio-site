import {
  Box,
  Container,
  Link,
  VStack,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import theme from '../lib/theme'

const AnimatedLogo = ({ logo }) => {
  return (
    <Box
      as={logo}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: 'translateY(-2px)',
        color: useColorModeValue('#26BF86', '#4A9F79')
      }}
      fontSize="32px"
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
    />
  )
}

const Footer = () => {
  return (
    <VStack>
      <Container bg={theme.styles.bg}>
        <HStack justifyContent={'center'}>
          <Box>
            <Link
              href="https://github.com/oscarczer"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
              isExternal
            >
              <AnimatedLogo logo={IoLogoGithub} />
            </Link>
          </Box>
          <Box>
            <Link
              href="https://www.linkedin.com/in/oscar-czernuszyn/"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
              isExternal
            >
              <AnimatedLogo logo={IoLogoLinkedin} />
            </Link>
          </Box>
          <Box>
            <Link
              href="mailto:oscarczer@gmail.com"
              target="_blank"
              _hover={{ textDecoration: 'none' }}
            >
              <AnimatedLogo logo={IoMail} />
            </Link>
          </Box>
        </HStack>
        <Link href={'https://github.com/oscarczer/portfolio-site'}>
          <Box
            pt={2}
            align="center"
            opacity={0.3}
            fontSize={'sm'}
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            isExternal
          >
            Site last updated 4/4/2024
          </Box>
        </Link>
      </Container>
    </VStack>
  )
}

export default Footer
