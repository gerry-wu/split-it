import React from 'react'
import { Stack, Text } from '@chakra-ui/core'
import AddMemberButton from './AddMemberButton'
import MemberInput from './MemberInput'

const MemberInputs = ({
  memberCount,
  setMemberCount,
  register,
  removeMember,
}) => {
  return (
    <>
      <Text as="label" fontSize="lg">
        Members
      </Text>
      <Stack spacing={2} mb="0.5rem">
        {[...Array(memberCount)].map((e, i) => (
          <MemberInput
            index={i}
            key={i}
            removeMember={removeMember}
            refName={register}
            aria-label="Enter a trip member name"
          />
        ))}
      </Stack>
      <AddMemberButton
        plural={memberCount > 0}
        onClick={() => setMemberCount(memberCount + 1)}
        aria-label="Remove member"
      />
    </>
  )
}

export default MemberInputs
