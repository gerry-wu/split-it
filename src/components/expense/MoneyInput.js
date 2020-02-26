import React from 'react'
import { FormControl, FormLabel } from '@chakra-ui/core'
import InputGroup from '../InputGroup'

const MoneyInput = ({ name, register, error }) => (
  <FormControl my={3}>
    <FormLabel htmlFor={name}>Amount</FormLabel>
    <InputGroup
      leftchildren={'$'}
      placeholder="0.00"
      name={name}
      register={register({
        required: 'Please enter the amount',
        pattern: {
          value: /^[0-9]+(\.[0-9]{1,2})?$/i,
          message: 'Please enter a valid amount',
        },
      })}
      error={error}
    />
  </FormControl>
)
export default MoneyInput
