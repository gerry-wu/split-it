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
            removeMember={removeMember}
            refName={register}
          />
        ))}
      </Stack>
      <AddMemberButton
        plural={memberCount > 0}
        onClick={() => setMemberCount(memberCount + 1)}
      />
    </>
  )
}

export default MemberInputs
