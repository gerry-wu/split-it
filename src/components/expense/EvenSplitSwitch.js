import React from 'react'
import { Controller } from 'react-hook-form'
import { FormControl, FormLabel, Switch } from '@chakra-ui/core'

const EvenSplitSwitch = ({ name, control }) => (
  <Controller
    name={name}
    as={
      <FormControl mb={5}>
        <FormLabel htmlFor={name}>Non-even split?</FormLabel>
        <Switch id={name} />
      </FormControl>
    }
    control={control}
  />
)

export default EvenSplitSwitch
