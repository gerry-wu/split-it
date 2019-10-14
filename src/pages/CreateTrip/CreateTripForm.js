import React from 'react'
import { Button, Input } from '@chakra-ui/core'

const CreateTripForm = ({ tripName, handleChange, onSubmit }) => {
  return (
    <>
      <Input
        placeholder="Name your trip"
        value={tripName}
        size="lg"
        onChange={handleChange}
        width="300px"
        marginBottom="1rem"
      />

      <Button
        width="150px"
        variantColor="green"
        p="1rem"
        height="auto"
        onClick={onSubmit}
      >
        Create new Trip
      </Button>
    </>
  )
}

export default CreateTripForm
