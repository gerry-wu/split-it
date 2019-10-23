import React from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import CreateTripForm from './CreateTripForm'

const CreateTripPage = ({ setTrip }) => (
  <Flex direction="column" margin="2rem">
    <Heading as="h1" fontSize="60px" marginBottom="3rem">
      Create a trip
    </Heading>
    <CreateTripForm setTrip={setTrip} />
  </Flex>
)

export default CreateTripPage
