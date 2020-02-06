import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react'
import { createUserProfileDocument, auth } from '../utils/firebase'

export const UserContext = createContext()

export const useUserContext = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    console.log('auth')
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapshot => {
            setUser({ uid: snapshot.id, ...snapshot.data() })
          })
        } else {
          setUser(null)
        }
      },
    )
    return () => unsubscribeFromAuth()
  }, [])

  return (
    <UserContext.Provider value={user}>
      {user !== undefined ? children : null}
    </UserContext.Provider>
  )
}

export default UserProvider
