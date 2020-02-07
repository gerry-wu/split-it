import React from 'react'
import { Box, Flex, Heading, Divider } from '@chakra-ui/core'
import { useUserContext } from '../providers/UserProvider'
import SigninButton from './signinButton'
import SignoutButton from './signoutButton'

const Header = () => {
  const user = useUserContext()
  return (
    <>
      <Box as="header" p={2}>
        <Flex align="center" justify="space-between" px={20}>
          <Heading
            size="lg"
            color="blue.700"
            fontFamily="Tahoma, Geneva, sans-serif"
          >
            Splitit
          </Heading>
          <Flex>{user ? <SignoutButton /> : <SigninButton />}</Flex>
        </Flex>
      </Box>
      <Divider />
    </>
  )
}

export default Header
