import React from 'react'
import {
  Heading,
  List,
  ListItem,
  ListIcon,
  Flex,
  Box,
  Image,
  Text,
  Stack,
  Link,
  Icon,
} from '@chakra-ui/core'
import calculator from '../../assets/calculator.png'
import { Link as RouterLink } from 'react-router-dom'

const LandingPage = () => {
  return (
    <Stack align="center" spacing={[5, 16]} p={[8, 10]}>
      <Stack>
        <Heading as="h2" size="xl">
          Easy splitting of group expenses
        </Heading>
        <Text fontSize="2xl" textAlign="center" color="gray.500">
          You enjoy the group trips. We split the cost.
        </Text>
      </Stack>
      <Flex justify="center" align="center" wrap="wrap">
        <Box
          w="10%"
          maxW="350px"
          minW="200px"
          my={[8, 0]}
          mr={[0, 16]}
        >
          <Image src={calculator} alt="" />
        </Box>
        <Stack spacing={5}>
          <Heading as="h2" size="xl" fontWeight="normal">
            Split the cost your trips
          </Heading>
          <List spacing={1} color="gray.500">
            <ListItem>
              <ListIcon icon="check-circle" color="green.500" />
              Add new trips with multiple members
            </ListItem>
            <ListItem>
              <ListIcon icon="check-circle" color="green.500" />
              Document all the trip expense at one place
            </ListItem>
            <ListItem>
              <ListIcon icon="check-circle" color="green.500" />
              Settle up the expense at just one click!
            </ListItem>
          </List>
          <Link
            as={RouterLink}
            to="/login"
            color="brand"
            fontWeight="bold"
          >
            Sign in to start your journey
            <Icon name="arrow-forward" mx="2px" />
          </Link>
        </Stack>
      </Flex>
    </Stack>
  )
}

export default LandingPage
