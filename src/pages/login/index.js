import React, { useContext, useEffect } from 'react'
import { Button } from '@chakra-ui/core'
import { auth, signInWithGoogle } from '../../utils/firebase'
import { UserContext } from '../../providers/UserProvider'
import { useHistory } from 'react-router-dom'

const LoginPage = () => {
  const user = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = async () => {
    try {
      await signInWithGoogle()
      history.push('/create-trip')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {user ? (
        "You're logged in!"
      ) : (
        <Button onClick={handleSubmit}>Sign In with Google</Button>
      )}
    </>
  )
}

export default LoginPage
