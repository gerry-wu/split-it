import React, { useState, useEffect } from 'react'
import loader from '../assets/loader.gif'
import { Image, Box } from '@chakra-ui/core'

const Loader = () => {
  const [enableDisplay, setEnableDisplay] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setEnableDisplay(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {enableDisplay && (
        <Box pt={32}>
          <Image src={loader} m="auto" data-testid="loader" />
        </Box>
      )}
    </>
  )
}

export default Loader
