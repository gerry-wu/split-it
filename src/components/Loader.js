import React, { useState, useEffect } from 'react'
import loader from '../assets/loader.gif'
import { Image, Box } from '@chakra-ui/core'

const Loader = () => {
  const [enableDisplay, setEnableDisplay] = useState(false)
  useEffect(() => {
    console.log('call')
    const timer = setTimeout(() => {
      setEnableDisplay(true)
      console.log(enableDisplay)
    }, 2500)
    return () => clearTimeout(timer)
  })
  return (
    <>
      {enableDisplay && (
        <Box pt={32}>
          <Image src={loader} m="auto" />
        </Box>
      )}
    </>
  )
}

export default Loader
