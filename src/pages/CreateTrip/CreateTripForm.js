import React from 'react'
import { Input, Text, Box } from '@chakra-ui/core'
import CTA from '../../components/CTA'

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

      <CTA to="/trip" onClick={onSubmit}>
        Create Trip
      </CTA>
    </>
  )
}

export default CreateTripForm
