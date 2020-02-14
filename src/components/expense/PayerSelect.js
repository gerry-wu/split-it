import React, { useState } from 'react'
import { FormControl, FormLabel, Select } from '@chakra-ui/core'

const PayerSelect = ({ members }) => {
  const [payer, setPayer] = useState()
  return (
    <FormControl isRequired mb={5}>
      <FormLabel htmlFor="payer">Who paid?</FormLabel>
      <Select
        id="payer"
        name="payer"
        placeholder="Select the payer"
        onChange={e => setPayer(e.target.value)}
        value={payer}
      >
        {members.length !== 0 &&
          members.map((member, index) => (
            <option value={member} key={`member-${index}`}>
              {member}
            </option>
          ))}
      </Select>
    </FormControl>
  )
}

export default PayerSelect
