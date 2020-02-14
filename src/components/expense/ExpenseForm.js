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
import PayerSelect from './PayerSelect'
import EvenSliptSwitch from './EvenSplitSwitch'
import SplitOptions from './SplitOptions'

const ExpenseForm = ({ members }) => {
  const {
    user: { displayName },
  } = useAuth()
  members = [displayName, ...members]

  const [isNonEven, setIsNonEven] = useState(false)
  const [splitMethod, setSplitMethod] = useState('weight')

  const handleSubmit = () => {}
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={5}>
        <DateInput />
        <FormControl>
          <FormLabel htmlFor="desc">Description</FormLabel>
          <Input id="desc" />
        </FormControl>
        <MoneyInput />
        <PayerSelect members={members} />
        <EvenSliptSwitch
          isNonEven={isNonEven}
          setIsNonEven={setIsNonEven}
        />
        {isNonEven && (
          <SplitOptions
            splitMethod={splitMethod}
            setSplitMethod={setSplitMethod}
          />
        )}
        <ShareExpense
          members={members}
          showInput={isNonEven && splitMethod}
        />
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
