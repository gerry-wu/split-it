import React from 'react'
import { Button } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'

const SigninButton = () => {
  const history = useHistory()

  return (
    <Button onClick={() => history.push('/login')}>Sign In</Button>
  )
}

export default SigninButton
