import React from 'react'
import { Button } from '@chakra-ui/core'
import { signInWithGoogle } from '../utils/firebase'
import { useHistory } from 'react-router-dom'

const SigninButton = () => {
  const history = useHistory()
  const handleClick = async () => {
    try {
      await signInWithGoogle()
      history.push('/create-trip')
    } catch (error) {
      console.log(error)
    }
  }
  return <Button onClick={handleClick}>Google Sign In</Button>
}

export default SigninButton
