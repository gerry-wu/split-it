import React, { useEffect } from 'react'
import { Controller } from 'react-hook-form'
import {
  FormControl,
  FormLabel,
  Checkbox,
  CheckboxGroup,
  Input,
  Box,
  Stack,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/core'
import InputError from '../InputError'

const WeightInput = ({ name, control }) => {
  return (
    <Controller
      as={<Input variant="flushed" placeholder="Weight/Share" />}
      name={name}
      control={control}
      rules={{
        required: 'Please enter the portion',
        pattern: {
          value: /^[0-9]+$/i,
          message: 'Please enter a valid amount',
        },
      }}
    />
  )
}

const OtherInput = ({ name, control, children }) => {
  return (
    <Controller
      as={
        <InputGroup w="70%">
          <InputLeftElement
            color="gray.300"
            fontSize="1.2em"
            children={children}
          />
          <Input variant="flushed" />{' '}
        </InputGroup>
      }
      name={name}
      control={control}
      rules={{
        required: 'Please enter the portion',
        pattern: {
          value: /^[0-9]+(\.[0-9]{1,2})?$/i,
          message: 'Please enter a valid amount',
        },
      }}
    />
  )
}

const ShareExpense = ({
  members,
  name,
  setValue,
  register,
  isNonEven,
  watch,
  unregister,
  error,
  control,
}) => {
  useEffect(() => {
    register(
      { name },
      {
        validate: {
          atLeastOneChecked: values =>
            values.find(value => value.isChecked) ||
            'Please check at least one memeber',
        },
      },
    )
    return () => unregister(name)
  }, [register, name, unregister])

  const splitWay = watch(name)
  const splitMethod = watch('splitMethod')
  console.log('TCL: splitWay', splitWay)

  const handleCheck = index => e => {
    const updatedCheck = splitWay.slice(0)
    updatedCheck[index].isChecked = e.target.checked
    setValue(name, updatedCheck)
  }
  return (
    <FormControl mb={5}>
      <FormLabel>Who shares this expense?</FormLabel>
      <CheckboxGroup variantColor="blue">
        {members.length !== 0 &&
          members.map((member, index) => (
            <Stack
              spacing={3}
              isInline
              alignItems="center"
              key={`share-expense-${index}`}
            >
              <Box minW={splitMethod && ['140px', '180px']}>
                <Checkbox
                  isChecked={splitWay[index].isChecked}
                  onChange={handleCheck(index)}
                >
                  {member}
                </Checkbox>
              </Box>
              {isNonEven && splitWay[index].isChecked && (
                <Box>
                  {splitMethod === 'weight' ? (
                    <WeightInput
                      name={`${name}[${index}].portion`}
                      control={control}
                    />
                  ) : (
                    <OtherInput
                      name={`${name}[${index}].portion`}
                      control={control}
                      children={splitMethod === 'amount' ? '$' : '%'}
                    />
                  )}
                  {error && error[index] && error[index].portion && (
                    <InputError inputName={name}>
                      {error[index].portion.message}
                    </InputError>
                  )}
                </Box>
              )}
            </Stack>
          ))}
      </CheckboxGroup>
      {error && error.message && (
        <InputError inputName={name}>{error.message}</InputError>
      )}
    </FormControl>
  )
}

export default ShareExpense
