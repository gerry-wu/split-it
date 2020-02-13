import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from '@chakra-ui/core'

const PayerRadioGroup = ({ members }) => {
  const [payer, setPayer] = useState(members[0])
  return (
    <FormControl isRequired mb={5}>
      <FormLabel>Who Paid?</FormLabel>
      <RadioGroup
        onChange={e => setPayer(e.target.value)}
        value={payer}
        isInline
        spacing={5}
      >
        {members.length !== 0 &&
          members.map((member, index) => (
            <Radio value={member} key={`member-${index}`}>
              {member}
            </Radio>
          ))}
      </RadioGroup>
    </FormControl>
  )
}

export default PayerRadioGroup
