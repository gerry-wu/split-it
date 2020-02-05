import React from 'react'
import { Button } from '@chakra-ui/core'
import { signInWithGoogle } from '../utils/firebase'
import { useHistory } from 'react-router-dom'

const SignoutButton = () => {
  const history = useHistory()
  const handleClick = async () => {
    try {
      await signInWithGoogle()
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  return <Button onClick={handleClick}>Sign Out</Button>
}

export default SignoutButton
