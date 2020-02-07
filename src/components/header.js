import React from 'react'
import { Box, Flex, Divider, Image } from '@chakra-ui/core'
import { useUserContext } from '../providers/UserProvider'
import SigninButton from './signinButton'
import SignoutButton from './signoutButton'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const user = useUserContext()
  return (
    <>
      <Box as="header" p={0}>
        <Flex align="center" justify="space-between" px={20}>
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
