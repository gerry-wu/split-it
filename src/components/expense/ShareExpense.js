import React, { useEffect, useState } from 'react'
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

const ShareInput = ({ index, splitMethod, handleInput, value }) => {
  const handleChange = i => e => {
    console.log('handleChange internal call')
    handleInput(i, e.target.value)
  }

  console.log('render shareinput')
  if (splitMethod === 'weight') {
    return (
      <Input
        variant="flushed"
        placeholder="Weight/Share"
        onChange={handleChange(index)}
        value={value || ''}
      />
    )
  }
  const children = splitMethod === 'amount' ? '$' : '%'
  return (
    <InputGroup w="70%">
      <InputLeftElement
        color="gray.300"
        fontSize="1.2em"
        children={children}
      />
      <Input
        variant="flushed"
        onChange={handleChange(index)}
        value={value || ''}
      />
    </InputGroup>
  )
}

const ShareExpense = ({
  members,
  name,
  setValue,
  register,
  splitMethod,
  isNonEven,
  watch,
}) => {
  useEffect(() => {
    register({ name: name })
  }, [register, name])

  const splitWay = watch(name)
  console.log('TCL: splitWay', splitWay)

  const handleInput = (i, value) => {
    console.log('TCL: handleInput -> value', value)
    const updatedCheck = splitWay.slice(0)
    updatedCheck[i].portion = value === '' ? null : value
    setValue(name, updatedCheck)
  }

  const handleCheck = index => e => {
    const isChecked = e.target.checked
    const updatedCheck = splitWay.slice(0)
    updatedCheck[index].isChecked = isChecked
    if (!isChecked) updatedCheck[index].portion = null
    setValue(name, updatedCheck)
    console.log('splitway, ', splitWay)
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
                  key={`member-${index + 1}`}
                  isChecked={splitWay[index].isChecked}
                  onChange={handleCheck(index)}
                >
                  {member}
                </Checkbox>
              </Box>
              {isNonEven && splitWay[index].isChecked && (
                <ShareInput
                  index={index}
                  splitMethod={splitMethod}
                  handleInput={handleInput}
                  value={splitWay[index].portion}
                />
              )}
            </Stack>
          ))}
      </CheckboxGroup>
    </FormControl>
  )

  // return (
  //   <ShareInput
  //     index={1}
  //     splitMethod="weight"
  //     handleInput={(a, b) => console.log('hey')}
  //   />
  // )
}

export default ShareExpense
