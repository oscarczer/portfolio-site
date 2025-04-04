import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children, ...props}) => {
  const active = path === href
  const bgColor = useColorModeValue('#f472b6', '#ec4899')

  const activeText = useColorModeValue('whiteAlpha.900', 'gray.800')
  const inactiveText = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link
      as={NextLink}
      href={href}
      p={2}
      bg={active ? bgColor : undefined}
      color={active ? activeText : inactiveText}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#fffff40', '#2020230')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Projects
          </LinkItem>
          <LinkItem
            href="https://drive.google.com/file/d/1w42gXRXnLFpbS9DgnruAVjZ0VtoAtM6K/view?usp=sharing"
            path={path}
            isExternal
          >
            Resume
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem>Projects</MenuItem>
                </NextLink>
                <NextLink
                  href="https://drive.google.com/file/d/1w42gXRXnLFpbS9DgnruAVjZ0VtoAtM6K/view?usp=sharing"
                  passHref
                  isExternal
                >
                  <MenuItem>Resume</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
