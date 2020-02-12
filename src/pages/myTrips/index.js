import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Flex,
  Stack,
  Button,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/core'
import TripCard from '../../components/TripCard'
import { queryTripsByUid } from '../../firebase/trip'
import { useAuth } from '../../hooks/useAuth'
import Loader from '../../components/Loader'

const MyTripsPage = () => {
  const { user } = useAuth()
  const { uid } = user

  const [trips, setTrips] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

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

  return (
    <Box px={[3, 8]}>
      <Flex justifyContent="space-between" my={5}>
        <Text fontSize="xl" fontWeight="bold">
          Hi, {user.displayName}
        </Text>
        <Button variantColor="teal">
          <Link to="/create-trip">Create a new trip!</Link>
        </Button>
      </Flex>
      {isError && (
        <Alert status="error">
          <AlertIcon />
          There was an error processing your request
        </Alert>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <Stack spacing={5}>
          {trips &&
            trips.map(({ id, name, members }, index) => (
              <TripCard
                key={index}
                tripId={id}
                title={name}
                members={members}
              />
            ))}
        </Stack>
      )}
    </Box>
  )
}

export default MyTripsPage
