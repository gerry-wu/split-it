import React from 'react'
import { Text, Icon, Stack } from '@chakra-ui/core'

const InputError = ({ children, inputName }) => (
  <Stack isInline>
    {children ? (
      <>
        <Icon name="warning-2" color="red.600" />
        <Text
          id={`${inputName}-error`}
          as="span"
          fontSize="sm"
          mb="0.5rem"
          color="red.600"
          height="1.5rem"
          display="block"
        >
          {children}
        </Text>
      </>
    ) : (
      <Stack height="1.5rem"></Stack>
    )}
  </Stack>
)

export default InputError
