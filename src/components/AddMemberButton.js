import React from 'react'
import { Button } from '@chakra-ui/core'

const AddMemberButton = ({ plural, onClick }) => (
  <Button rightIcon="add" onClick={onClick} w="100%" minWidth="150px">
    {plural ? 'Add another member' : 'Add a member'}
  </Button>
)

export default AddMemberButton
