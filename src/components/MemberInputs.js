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
        Who will be joining you?
      </Text>
      <Stack spacing={2} mb="1rem" mt="0.4rem">
        {[...Array(memberCount)].map((e, i) => (
          <MemberInput
            index={i}
            removeMember={removeMember}
            refName={register}
            aria-label="Enter a trip member name"
            key={`memberInput-${i}`}
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
