import React from 'react'
import { Button, Input, Text, Box } from '@chakra-ui/core'

const CreateTripForm = ({ tripName, handleChange, onSubmit }) => {
  return (
    <>
      <Box>
        <Text as="label" fontSize="lg" htmlFor="tripName">
          Name your trip
        </Text>
        <Input
          id="tripName"
          value={tripName}
          size="md"
          onChange={handleChange}
          width="300px"
          marginBottom="1rem"
        />
      </Box>

      <Button
        width="150px"
        variantColor="green"
        p="1rem"
        height="auto"
        onClick={onSubmit}
      >
        Create Trip
      </Button>
    </>
  )
}

export default CreateTripForm
