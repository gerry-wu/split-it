import React, { useState } from 'react'
import { Flex, Heading } from '@chakra-ui/core'
import CreateTripForm from './CreateTripForm'

const CreateTripPage = () => {
  return (
    <Flex direction="column" margin="2rem">
      <Heading as="h1" fontSize="60px" marginBottom="3rem">
        Create a trip
      </Heading>
      <CreateTripForm />
    </Flex>
  )
}

export default CreateTripPage
