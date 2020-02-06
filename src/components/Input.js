import React from 'react'
import { Box, Text, Input as FormInput } from '@chakra-ui/core'
import InputError from './InputError'

const Input = ({ label, name, refName, error }) => (
  <Box mb="0.5rem">
    {label ? (
      <Text as="label" fontSize="lg" htmlFor={name}>
        {label}
      </Text>
    ) : null}
    <FormInput
      id={name}
      name={name}
      ref={refName}
      size="md"
      width="100%"
      isInvalid={error ? true : false}
      errorBorderColor="red.300"
      aria-describedby={`${name}-error`}
    />
    <InputError inputName={name}>{error}</InputError>
  </Box>
)

export default Input
