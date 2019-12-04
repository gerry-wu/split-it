export const firebase = global.firebase

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

export const createUserProfileDocument = async user => {
  if (!user) return
  // Get a reference to the place in the database where a user profile might be
  const userRef = firestore.doc(`users/${user.uid}`)

  //Go ahead and fetch the document from that location
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = user
    try {
      await userRef.set({
        displayName,
        email,
      })
    } catch (error) {
      console.error('Error creating user', error)
    }
  }
  return getUserDocument(user.uid)
}

export const getUserDocument = async uid => {
  if (!uid) return null
  try {
    return firestore.collection('users').doc(uid)
  } catch (error) {
    console.error('Error fetching user', error.message)
  }
}
