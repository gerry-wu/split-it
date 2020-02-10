import React from 'react'
import { Text, Icon, Stack } from '@chakra-ui/core'

const InputError = ({ children, inputName }) => (
  <Stack isInline align="center" height="1.5rem">
    {children ? (
      <>
        <Icon name="warning-2" color="red.600" mr="0.25rem" />
        <Text
          id={`${inputName}-error`}
          as="span"
          fontSize="sm"
          color="red.600"
          display="block"
        >
          {children}
        </Text>
      </>
    ) : null}
  </Stack>
)

export default InputError
