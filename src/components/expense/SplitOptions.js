import React from 'react'
import { Controller } from 'react-hook-form'
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@chakra-ui/core'
const SplitOptions = ({ name, control }) => {
  return (
    <FormControl mb={5}>
      <FormLabel htmlFor={name}>
        How do you want to split this?
      </FormLabel>
      <Controller
        name={name}
        control={control}
        as={
          <RadioGroup isInline spacing={4} id={name}>
            <Radio value="weight">Weight/Share</Radio>
            <Radio value="amount">Amount</Radio>
            <Radio value="percentage">Percentage</Radio>
          </RadioGroup>
        }
      />
    </FormControl>
  )
}

export default SplitOptions
