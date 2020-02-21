import React from 'react'
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/core'
import InputError from '../InputError'

const MoneyInput = ({ name, register, error }) => {
  return (
    <FormControl mb={3}>
      <FormLabel htmlFor={name}>Amount</FormLabel>
      <InputGroup>
        <InputLeftElement
          color="gray.300"
          fontSize="1.2em"
          children="$"
        />
        <Input
          placeholder="0.00"
          id={name}
          name={name}
          type="number"
          ref={register({
            required: 'Please enter the amount',
            pattern: {
              value: /^[0-9]+(\.[0-9]{1,2})?$/i,
              message: 'Please enter a valid amount',
            },
          })}
        />
      </InputGroup>
      {error && (
        <InputError inputName={name}>{error.message}</InputError>
      )}
    </FormControl>
  )
}

export default MoneyInput
