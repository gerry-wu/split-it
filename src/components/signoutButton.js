import React from 'react'
import { Button } from '@chakra-ui/core'
import { useAuth } from '../hooks/useAuth'

const SignoutButton = () => {
  const auth = useAuth()
  const handleClick = async () => {
    try {
      await auth.signout()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Button variant="ghost" onClick={handleClick}>
      Sign Out
    </Button>
  )
}

export default SignoutButton
