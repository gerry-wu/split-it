import { firestore } from './base'

const tripsRef = firestore.collection('trips')

export const queryTripsByUid = async uid => {
  try {
    const query = tripsRef.where('uid', '==', uid)
    const querySnapshot = await query.get()
    const trips = []
    querySnapshot.forEach(doc => {
      const { name, members } = doc.data()
      trips.push({ id: doc.id, name, members })
    })
    return trips
  } catch (error) {
    console.error('Error getting documents: ', error)
  }
}
