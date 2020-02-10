import React from 'react'
import { Flex, Heading, Box } from '@chakra-ui/core'
import CreateTripForm from './CreateTripForm'

const CreateTripPage = () => {
  return (
    <Flex direction="column" margin="2rem" w="100%">
      <Heading
        as="h1"
        fontSize={['2xl', '5xl']}
        fontWeight={['medium', 'normal']}
        mb="3rem"
      >
        Tell us about your{' '}
        <Box
          as="span"
          fontWeight={['semibold', 'medium']}
          color="blue.400"
          fontStyle="italic"
        >
          next adventure
        </Box>
      </Heading>
      <CreateTripForm />
    </Flex>
  )
}

export default CreateTripPage
