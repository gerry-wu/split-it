import React from 'react'
import { FormControl, FormLabel, Select } from '@chakra-ui/core'
import InputError from '../InputError'

const PayerSelect = ({ members, name, register, error }) => {
  return (
    <FormControl mb={5}>
      <FormLabel htmlFor={name}>Who paid?</FormLabel>
      <Select
        id={name}
        name={name}
        placeholder="Select the payer"
        ref={register({ required: 'Please select a payer' })}
      >
        {members.length !== 0 &&
          members.map((member, index) => (
            <option value={member} key={`member-${index}`}>
              {member}
            </option>
          ))}
      </Select>
      {error && (
        <InputError inputName={name}>{error.message}</InputError>
      )}
    </FormControl>
  )
}

export default PayerSelect
