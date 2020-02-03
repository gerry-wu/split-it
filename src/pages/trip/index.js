import React, { useEffect, useState } from 'react'
import { Flex, Heading, Text } from '@chakra-ui/core'
import { useParams } from 'react-router-dom'
import { firestore } from '../../utils/firebase'

const TripPage = () => {
  const [trip, setTrip] = useState('')
  const { tripId } = useParams()

  useEffect(() => {
    const fetchTrip = async () => {
      const trip = await firestore.doc(`trips/${tripId}`).get()

      setTrip({
        ...trip.data(),
      })
    }
    fetchTrip()
  }, [tripId])

  return (
    <Flex direction="column" p="1rem">
      <Heading as="h1" fontSize="xl" mb="1rem">
        {trip.name}
      </Heading>
      <Text mb="3rem" fontSize="md">
        {trip.description}
      </Text>
      <Heading as="h2" fontSize="lg" mb="0.5rem">
        Trip members
      </Heading>
      {trip &&
        trip.members.map(member => (
          <Text fontSize="md">{member}</Text>
        ))}
    </Flex>
  )
}

export default TripPage
