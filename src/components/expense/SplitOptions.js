import React from 'react'
import {
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@chakra-ui/core'
const SplitOptions = ({ splitMethod, setSplitMethod }) => {
  return (
    <FormControl mb={5}>
      <FormLabel htmlFor="splitOptions">
        How do you want to split this?
      </FormLabel>
      <RadioGroup
        isInline
        spacing={4}
        id="splitOptions"
        name="splitOptions"
        onChange={e => setSplitMethod(e.target.value)}
        value={splitMethod}
      >
        <Radio value="weight">Weight/Share</Radio>
        <Radio value="amount">Amount</Radio>
        <Radio value="percentage">Percentage</Radio>
      </RadioGroup>
    </FormControl>
  )
}

export default SplitOptions
