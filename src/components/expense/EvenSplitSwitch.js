import React from 'react'
import { FormControl, FormLabel, Switch } from '@chakra-ui/core'

const EvenSplitSwitch = ({ isNonEven, setIsNonEven }) => {
  const handleSwitch = () => setIsNonEven(!isNonEven)
  return (
    <FormControl mb={5}>
      <FormLabel htmlFor="even-split">Non-even split?</FormLabel>
      <Switch
        id="even-split"
        name="isEvenSplit"
        value={isNonEven}
        isChecked={isNonEven}
        onChange={handleSwitch}
      />
    </FormControl>
  )
}

export default EvenSplitSwitch
