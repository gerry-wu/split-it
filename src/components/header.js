import React, { useContext } from 'react'
import { Box, Flex, Heading } from '@chakra-ui/core'
import { UserContext } from '../providers/UserProvider'
import SigninButton from './signinButton'
import SignoutButton from './signoutButton'

const Header = () => {
  const user = useContext(UserContext)
  return (
    <Box as="header" bg="gray.400" p={2}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="2xl" color="white">
          Split it!
        </Heading>
        <Flex>{user ? <SignoutButton /> : <SigninButton />}</Flex>
      </Flex>
    </Box>
  )
}

export default Header
