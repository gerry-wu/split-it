import { useEffect, useState } from 'react'
import { queryTripsByUid } from '../../firebase/trip'

export const useTrips = () => {
  const [trips, setTrips] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [uid, setUid] = useState()

  useEffect(() => {
    const fetchTrips = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const myTrips = await queryTripsByUid(uid)
        setTrips(myTrips)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchTrips()
  }, [uid])

  return [{ trips, isLoading, isError }]
}
