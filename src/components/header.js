import React from 'react'
import { Box, Flex, Divider, Image } from '@chakra-ui/core'
import { useUserContext } from '../providers/UserProvider'
import SigninButton from './signinButton'
import SignoutButton from './signoutButton'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import theme from '../customTheme'

const Header = () => {
  const user = useUserContext()
  return (
    <>
      <Box
        as="header"
        p={0}
        borderTop={`6px solid ${theme.colors.brand}`}
      >
        <Flex align="center" justify="space-between" px={[3, 20]}>
          <Link to="/">
            <Image src={logo} alt="" w="150px" />
          </Link>

          <Flex>{user ? <SignoutButton /> : <SigninButton />}</Flex>
        </Flex>
      </Box>
      <Divider />
    </>
  )
}

export default Header
