import React, { useState } from 'react'
import {
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/core'
import { useAuth } from '../../hooks/useAuth'
import DateInput from './DateInput'
import MoneyInput from './MoneyInput'
import ShareExpense from './ShareExpense'
import PayerRadioGroup from './PayerRadioGroup'

const ExpenseForm = ({ members }) => {
  const {
    user: { displayName },
  } = useAuth()
  members = [displayName, ...members]
  const [day, setDay] = useState(new Date())
  const handleSubmit = () => {}
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={5}>
        <DateInput selectedDay={day} setSelectedDay={setDay} />
        <FormControl>
          <FormLabel htmlFor="desc">Description</FormLabel>
          <Input id="desc" />
        </FormControl>
        <MoneyInput />
        <PayerRadioGroup members={members} />
        <ShareExpense members={members} />
        <Stack py={5} spacing={5} isInline={[false, true]}>
          <Button w="100%">Save and New</Button>
          <Button w="100%" variantColor="blue">
            Save and Close
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default ExpenseForm
