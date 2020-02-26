import React from 'react'
import { useForm } from 'react-hook-form'
import { Stack, Button, Flex } from '@chakra-ui/core'
import { useAuth } from '../../hooks/useAuth'
import DateInput from './DateInput'
import MoneyInput from './MoneyInput'
import ShareExpense from './ShareExpense'
import PayerSelect from './PayerSelect'
import SplitOptions from './SplitOptions'
import Input from '../Input'
import Switch from '../Switch'
import { dateToShortDate } from '../../utils/date'

const ExpenseForm = ({ members }) => {
  const {
    user: { displayName },
  } = useAuth()

  members = [displayName, ...members]

  const defaultValues = {
    date: dateToShortDate(new Date()),
    isEven: true,
    splitMethod: 'weight',
    shareExpense: members.map(member => ({
      member,
      isChecked: true,
    })),
  }
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    control,
    clearError,
  } = useForm({
    defaultValues,
  })

  console.log('errors, ', errors)

  // TODO: remove console log and implement the actual form submit
  const onSubmit = data => console.log(data)

  const isEven = watch('isEven')

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DateInput
        {...{ register, setValue, name: 'date', error: errors.date }}
      />
      <Input
        {...{
          register,
          label: 'Description',
          name: 'desc',
        }}
      />
      <MoneyInput
        {...{ register, name: 'amount', error: errors.amount }}
      />
      <PayerSelect
        {...{ members, register, name: 'payer', error: errors.payer }}
      />
      <Switch
        {...{
          register,
          name: 'isEven',
          label: 'Split this expense evenly?',
        }}
      />
      {!isEven && (
        <SplitOptions
          {...{
            control,
            name: 'splitMethod',
          }}
        />
      )}
      <ShareExpense
        {...{
          members,
          register,
          setValue,
          isEven,
          watch,
          clearError,
          name: 'shareExpense',
          error: errors.shareExpense,
        }}
      />
      <Flex pb={5} flexDirection={['column', 'row']}>
        <Button w="100%" mr={[0, 5]} mb={[3, 0]}>
          Save and New
        </Button>
        <Button w="100%" variantColor="blue" type="submit">
          Save and Close
        </Button>
      </Flex>
    </form>
  )
}

export default ExpenseForm
