import React, { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import CreateTripForm from './CreateTripForm'

const CreateTripPage = () => {
  const [tripName, setTripName] = useState('')
  const handleChange = event => setTripName(event.target.value)

  const onSubmit = () => console.log('We have submitted the form!')

  return (
    <Flex direction="column" margin="2rem">
      <Heading as="h1" fontSize="60px" marginBottom="3rem">
        Create a trip
      </Heading>
      <CreateTripForm
        tripName={tripName}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
    </Flex>
  )
}

export default CreateTripPage
