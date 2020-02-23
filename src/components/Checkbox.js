import React from 'react'
import { Checkbox as FormCheckbox } from '@chakra-ui/core'

const Checkbox = ({ name, register, handleCheck, children }) => {
  return (
    <FormCheckbox name={name} ref={register} onChange={handleCheck}>
      {children}
    </FormCheckbox>
  )
}

export default Checkbox
