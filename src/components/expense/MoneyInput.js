import React from 'react'
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputLeftElement,
} from '@chakra-ui/core'

const MoneyInput = () => {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="amount">Amount</FormLabel>
      <InputGroup mb={5}>
        <InputLeftElement
          color="gray.300"
          fontSize="1.2em"
          children="$"
        />
        <Input
          placeholder="0.00"
          id="amount"
          name="amount"
          type="number"
        />
      </InputGroup>
    </FormControl>
  )
}

export default MoneyInput
