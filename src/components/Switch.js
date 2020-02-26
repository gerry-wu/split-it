import React from 'react'
import {
  FormControl,
  FormLabel,
  Switch as FormSwitch,
} from '@chakra-ui/core'

const Switch = ({ name, label, register }) => (
  <FormControl mb={5}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <FormSwitch id={name} name={name} ref={register} />
  </FormControl>
)

export default Switch
