import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react'
import Loader from '../components/Loader'
import {
  createUserProfileDocument,
  signOut,
  signInWithGoogle,
  auth,
} from '../db/auth'

const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext)
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {auth.user === null ? <Loader /> : children}
    </authContext.Provider>
  )
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null)

  const signin = async () => {
    const response = await signInWithGoogle()
    const { uid, displayName, email } = response.user
    setUser({ uid, displayName, email })
    createUserProfileDocument(response.user)
  }

  const signout = async () => {
    try {
      await signOut()
      setUser(false)
    } catch {
      console.error('not able to sign out')
    }
  }

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        const { uid, displayName, email } = userAuth
        setUser({ uid, displayName, email })
      } else {
        setUser(false)
      }
    })

    return () => unsubscribeFromAuth()
  }, [])

  return {
    user,
    signin,
    signout,
  }
}
