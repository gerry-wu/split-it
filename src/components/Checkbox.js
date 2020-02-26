import React from 'react'
import { Checkbox as FormCheckbox } from '@chakra-ui/core'

const Checkbox = ({ name, register, handleClick, children }) => {
  return (
    <FormCheckbox name={name} ref={register} onChange={handleClick}>
      {children}
    </FormCheckbox>
  )
}

export default Checkbox
