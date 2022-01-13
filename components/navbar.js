import Logo from './logo'
import NextLink from 'next/link'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  useColorModeValue
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'

export default function Navbar(props) {
  const { path } = props
  return <Box></Box>
}

function LinkItem({ href, path, children }) {
  const active = path === href

  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passRef>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}
