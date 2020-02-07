import React from 'react'
import { Button } from '@chakra-ui/core'
import { signOut } from '../utils/firebase'

const SignoutButton = () => {
  const handleClick = async () => {
    try {
      await signOut()
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
