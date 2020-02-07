import React from 'react'
import { Link as ChakraLink } from '@chakra-ui/core'
import { Link as ReactRouterLink } from 'react-router-dom'

const RouterLink = props => (
  <ChakraLink {...props} as={ReactRouterLink}>
    {props.children}
  </ChakraLink>
)

export default RouterLink
