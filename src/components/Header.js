import React from 'react'
import { Box, Flex, Divider, Image } from '@chakra-ui/core'
import { useAuth } from '../hooks/useAuth'
import SigninButton from './SigninButton'
import SignoutButton from './SignoutButton'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import theme from '../customTheme'

const Header = () => {
  const auth = useAuth()
  return (
    <>
      <Box
        as="header"
        p={0}
        borderTop={`6px solid ${theme.colors.brand}`}
      >
        <Flex align="center" justify="space-between" px={[1, 5]}>
          <Link to="/" aria-label="Go to homepage">
            <Image src={logo} alt="" w="150px" data-testid="logo" />
          </Link>

          <Flex>
            {auth.user ? <SignoutButton /> : <SigninButton />}
          </Flex>
        </Flex>
      </Box>
      <Divider />
    </>
  )
}

export default Header
