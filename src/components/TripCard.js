import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Heading, Text } from '@chakra-ui/core'
const TripCard = ({ tripId, title, members, ...rest }) => (
  <Link to={`/trip/${tripId}`}>
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={2} color="gray.500">
        {members.join(', ')}
      </Text>
    </Box>
  </Link>
)

export default TripCard
