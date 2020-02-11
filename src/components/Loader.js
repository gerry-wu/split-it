import React from 'react'
import loader from '../assets/loader.gif'
import { Image, Box } from '@chakra-ui/core'

const Loader = () => (
  <Box pt={32}>
    <Image src={loader} m="auto" />
  </Box>
)

export default Loader
