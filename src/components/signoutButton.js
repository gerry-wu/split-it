import React from 'react'
import { Button } from '@chakra-ui/core'
import { signOut } from '../utils/firebase'
import { useHistory } from 'react-router-dom'

const SignoutButton = () => {
  const history = useHistory()
  const handleClick = async () => {
    try {
      await signOut()
      history.push('/')
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
