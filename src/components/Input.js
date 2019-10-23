import React from 'react'
import { Text, Input as FormInput } from '@chakra-ui/core'

const Input = ({ inputId, value, onChange, label }) => (
  <>
    <Text as="label" fontSize="lg" htmlFor={inputId}>
      {label}
    </Text>
    <FormInput
      id={inputId}
      value={value}
      size="md"
      onChange={onChange}
      width="300px"
      marginBottom="1rem"
    />
  </>
)

export default Input
