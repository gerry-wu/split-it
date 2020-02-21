import React from 'react'
import {
  FormControl,
  FormLabel,
  Input as FormInput,
} from '@chakra-ui/core'
import InputError from './InputError'

const Input = ({
  label,
  name,
  register,
  validation,
  error,
  ...inputProps
}) => (
  <FormControl mb={3}>
    {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <FormInput
      id={name}
      name={name}
      ref={register || register(validation)}
      isInvalid={error ? true : false}
      errorBorderColor="red.300"
      aria-describedby={`${name}-error`}
      {...inputProps}
    />
    {error && (
      <InputError inputName={name}>{error.message}</InputError>
    )}
  </FormControl>
)

export default Input
