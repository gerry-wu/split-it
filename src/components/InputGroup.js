import React from 'react'
import {
  InputGroup as FromInputGroup,
  InputLeftElement,
  InputRightElement,
  Input as FormInput,
} from '@chakra-ui/core'
import InputError from './InputError'

const InputGroup = ({
  name,
  register,
  error,
  leftChildren,
  rightChildren,
  ...inputProps
}) => (
  <>
    <FromInputGroup>
      {leftChildren && (
        <InputLeftElement
          color="gray.300"
          fontSize="1.2em"
          children={leftChildren}
        />
      )}
      <FormInput
        ref={register}
        name={name}
        {...inputProps}
        isInvalid={error ? true : false}
        errorBorderColor="red.300"
        aria-describedby={`${name}-error`}
      />
      {rightChildren && (
        <InputRightElement
          color="gray.300"
          fontSize="1.2em"
          children={rightChildren}
        />
      )}
    </FromInputGroup>
    {error && (
      <InputError inputName={name}>{error.message}</InputError>
    )}
  </>
)

export default InputGroup
