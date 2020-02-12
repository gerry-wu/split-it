import React, { useEffect, useState } from 'react'
import { Flex, Heading, Text, Box } from '@chakra-ui/core'
import { useParams } from 'react-router-dom'
import { firestore } from '../../firebase'

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
    <Flex direction="column" p="1rem" margin="0 auto">
      <Heading
        as="h1"
        fontSize={['2xl', '5xl']}
        fontWeight="normal"
        mb="3rem"
      >
        Enjoy your trip to{' '}
        <Box as="span" fontWeight="medium" color="blue.400">
          {trip.name}
        </Box>
        !
      </Heading>

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
