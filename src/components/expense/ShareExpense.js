import React from 'react'
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

const ShareExpense = ({ members, showInput }) => {
  const [checkedItems, setCheckedItems] = React.useState(
    new Array(members.length).fill(true),
  )

  const displayInput = isDisabled => {
    if (showInput === 'weight') {
      return (
        <Input
          variant="flushed"
          isDisabled={!isDisabled}
          placeholder="Weight/Share"
        />
      )
    }
    const children = showInput === 'amount' ? '$' : '%'
    return (
      <InputGroup w="70%">
        <InputLeftElement
          color="gray.300"
          fontSize="1.2em"
          children={children}
        />
        <Input variant="flushed" isDisabled={!isDisabled} />
      </InputGroup>
    )
  }

  const handleCheck = index => e => {
    const updatedCheck = checkedItems.slice(0)
    updatedCheck[index] = e.target.checked

    setCheckedItems(updatedCheck)
  }
  return (
    <FormControl isRequired mb={5}>
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
              <Box minW={showInput && ['140px', '180px']}>
                <Checkbox
                  value={member}
                  key={`member-${index + 1}`}
                  isChecked={checkedItems[index]}
                  onChange={handleCheck(index)}
                >
                  {member}
                </Checkbox>
              </Box>
              {showInput && displayInput(checkedItems[index])}
              )}
            </Stack>
          ))}
      </CheckboxGroup>
    </FormControl>
  )
}

export default ShareExpense
