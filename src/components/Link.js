import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'

const Link = props => (
  <ChakraLink {...props} as={RouterLink}>
    {props.children}
  </ChakraLink>
)

export default Link
