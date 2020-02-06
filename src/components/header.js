import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/core'
import { useUserContext } from '../providers/UserProvider'
import SigninButton from './signinButton'
import SignoutButton from './signoutButton'

const Header = () => {
  const user = useUserContext()
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
