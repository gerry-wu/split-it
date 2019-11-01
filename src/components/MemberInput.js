import React from 'react'
import { Stack, Input, IconButton } from '@chakra-ui/core'

const MemberInput = ({
  index,
  removeMember,
  refName,
  isInvalid,
  ...props
}) => (
  <Stack isInline>
    <Input
      id={`members-${index}`}
      name={`members[${index}]`}
      ref={refName}
      errorBorderColor="red.300"
      {...props}
    />
    <IconButton
      variantColor="red"
      opacity="0.6"
      icon="close"
      onClick={() => removeMember(index)}
    />
  </Stack>
)

export default MemberInput
