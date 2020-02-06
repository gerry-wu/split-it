import React from 'react'
import SigninButton from '../../components/signinButton'
import {
  Heading,
  List,
  ListItem,
  ListIcon,
  Flex,
  Image,
} from '@chakra-ui/core'
import calculator from '../../assets/calculator.png'

const LandingPage = () => {
  return (
    <Flex h={700} bg="blue.50" justify="center" align="center" p={20}>
      <Flex w="35%" maxW="400px" m={5}>
        <Image src={calculator} alt="" />
      </Flex>
      <Flex
        h={400}
        direction="column"
        borderWidth="1px"
        rounded="lg"
        justify="space-around"
        p={10}
        bg="rgba(255,255,255,0.7)"
      >
        <Heading as="h2" size="xl">
          Sign in to split your trips!
        </Heading>
        <List spacing={3}>
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
        <SigninButton />
      </Flex>
    </Flex>
  )
}

export default LandingPage
