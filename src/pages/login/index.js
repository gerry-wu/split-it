import React, { useState } from 'react'
import {
  Heading,
  Flex,
  Text,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/core'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { GoogleLoginButton } from 'react-social-login-buttons'

const LoginPage = ({ location }) => {
  const auth = useAuth()

  const [isError, setError] = useState(false)

  const handleClick = async () => {
    try {
      await auth.signin()
    } catch (error) {
      setError(true)
    }
  }

  if (auth.user) {
    return (
      <Redirect to={location.state ? location.state.referrer : '/'} />
    )
  }

  return (
    <>
      {location.state && (
        <Alert status="error" justifyContent="center">
          <AlertIcon />
          <AlertTitle mr={2}>
            Please Login before Continuing
          </AlertTitle>
        </Alert>
      )}
      <Flex justify="center">
        <Stack
          maxW={550}
          w={['100%', '80%', '70%']}
          borderWidth={['0px', '1px']}
          rounded="lg"
          boxShadow={['', 'md']}
          p={[5, 16]}
          mt={10}
          spacing={10}
        >
          <Heading as="h2" size="2xl" textAlign="center">
            Log In
          </Heading>
          {isError && (
            <Text
              as="p"
              role="alert"
              color="tomato"
              fontWeight="bold"
            >
              Oops, something went wrong. Please try again!
            </Text>
          )}
          <GoogleLoginButton onClick={handleClick} />
        </Stack>
      </Flex>
    </>
  )
}

export default LoginPage
