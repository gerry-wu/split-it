import React from 'react'
import { Box, Text, Input as FormInput } from '@chakra-ui/core'

const Input = ({ label, name, refName, error }) => (
  <Box>
    <Text as="label" fontSize="lg" htmlFor={name}>
      {label}
    </Text>
    <FormInput
      id={name}
      name={name}
      ref={refName}
      size="md"
      width="300px"
      marginBottom="1rem"
      isInvalid={error ? true : false}
      errorBorderColor="red.300"
      mb="0"
      aria-describedby={`${name}-error`}
    />
    <Text
      id={`${name}-error`}
      as="span"
      fontSize="sm"
      mb="0.5rem"
      color="red.600"
      height="1.5rem"
      display="block"
    >
      {error}
    </Text>
  </Box>
)

export default Input
