import React, { useEffect } from 'react'
import {
  FormControl,
  FormLabel,
  CheckboxGroup,
  Box,
  Stack,
} from '@chakra-ui/core'
import InputError from '../InputError'
import Input from '../Input'
import InputGroup from '../InputGroup'
import Checkbox from '../Checkbox'

const ShareExpense = ({
  members,
  name,
  setValue,
  register,
  isNonEven,
  watch,
  error,
  clearError,
}) => {
  useEffect(() => {
    register(
      { name },
      {
        validate: {
          atLeastOneChecked: values =>
            values.some(value => value.isChecked) ||
            'Please check at least one memeber',
        },
      },
    )
  }, [register, name])

  const splitWay = watch(name)
  const splitMethod = watch('splitMethod')
  console.log('TCL: splitWay', splitWay)

  const handleCheck = index => e => {
    const updatedCheck = [...splitWay]
    updatedCheck[index].isChecked = e.target.checked
    setValue(name, updatedCheck)
    if (error) clearError(name)
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
                  name={`${name}[${index}].isChecked`}
                  register={register}
                  handleCheck={handleCheck(index)}
                >
                  {member}
                </Checkbox>
              </Box>
              {isNonEven && splitWay[index].isChecked && (
                <Box>
                  {splitMethod === 'weight' && (
                    <Input
                      variant="flushed"
                      placeholder="Weight/Share"
                      register={register({
                        required: `Please enter the ${splitMethod}`,
                        pattern: {
                          value: /^[0-9]+$/i,
                          message: 'Please enter a valid number',
                        },
                      })}
                      name={`${name}[${index}].${splitMethod}`}
                      error={
                        error && error[index]
                          ? error[index][splitMethod]
                          : undefined
                      }
                    />
                  )}
                  {splitMethod === 'amount' && (
                    <InputGroup
                      name={`${name}[${index}].${splitMethod}`}
                      leftChildren={'$'}
                      variant="flushed"
                      register={register({
                        required: `Please enter the ${splitMethod}`,
                        pattern: {
                          value: /^[0-9]+(\.[0-9]{1,2})?$/i,
                          message: `Please enter a valid ${splitMethod}`,
                        },
                      })}
                      error={
                        error && error[index]
                          ? error[index][splitMethod]
                          : undefined
                      }
                    />
                  )}
                  {splitMethod === 'percentage' && (
                    <InputGroup
                      name={`${name}[${index}].${splitMethod}`}
                      leftChildren={'%'}
                      variant="flushed"
                      register={register({
                        required: `Please enter the ${splitMethod}`,
                        pattern: {
                          value: /^[0-9]+(\.[0-9]{1,2})?$/i,
                          message: `Please enter a valid ${splitMethod}`,
                        },
                      })}
                      error={
                        error && error[index]
                          ? error[index][splitMethod]
                          : undefined
                      }
                    />
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
