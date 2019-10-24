import React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/core'

const TripPage = ({ trip }) => (
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
    {trip.members.map(member => (
      <Text fontSize="md">{member}</Text>
    ))}
  </Flex>
)

export default TripPage
