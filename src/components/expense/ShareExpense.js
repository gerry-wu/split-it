import React from 'react'
import {
  FormControl,
  FormLabel,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/core'

const ShareExpense = ({ members }) => {
  return (
    <FormControl isRequired mb={5}>
      <FormLabel>Who shares this expense?</FormLabel>
      <CheckboxGroup variantColor="blue" defaultValue={members}>
        {members.length !== 0 &&
          members.map((member, index) => (
            <Checkbox value={member} key={`member-${index + 1}`}>
              {member}
            </Checkbox>
          ))}
      </CheckboxGroup>
    </FormControl>
  )
}

export default ShareExpense
