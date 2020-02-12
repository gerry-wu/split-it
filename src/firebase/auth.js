import { firebase, firestore } from './base'
export const auth = firebase.auth()
export const currentUser = firebase.auth().currentUser

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()

export const createUserProfileDocument = async user => {
  if (!user) return
  if (!getUserDoc(user.uid)) {
    const { uid, displayName, email } = user
    const userRef = firestore.collection('users').doc(uid)
    try {
      await userRef.set({
        displayName,
        email,
      })
    } catch (error) {
      console.error('Error creating user', error)
    }
  }
}

export const getUserDoc = async uid => {
  if (!uid) return
  const userRef = firestore.collection('users').doc(uid)
  try {
    const doc = await userRef.get()
    if (doc.exists) {
      return doc.data()
    } else {
      console.error('No such document')
      return undefined
    }
  } catch (error) {
    console.error('Error fetching user', error.message)
  }
}
