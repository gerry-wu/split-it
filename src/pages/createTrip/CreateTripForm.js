import React, { useState } from 'react'
import { Button, Stack } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import MemberInputs from '../../components/MemberInputs'
import useForm from 'react-hook-form'
import { firestore } from '../../utils/firebase'
import { useUserContext } from '../../providers/UserProvider'

const CreateTripForm = () => {
  const history = useHistory()
  const [memberCount, setMemberCount] = useState(1)
  const [loading, setLoading] = useState(false)
  const user = useUserContext()

  const {
    register,
    handleSubmit,
    errors,
    setValue,
    getValues,
  } = useForm()

  // This submit method will only get called if there are no form validation errors thrown
  const onSubmit = async data => {
    //TODO: send to DB, get OK response
    const { members } = getValues({ nest: true })
    const { tripName: name, description } = data
    setLoading(true)

    try {
      const tripRef = await firestore.collection('trips').add({
        name,
        description,
        members,
        user: {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
        },
      })
      history.push(`/trip/${tripRef.id}`)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  /* getValues passing nest = true will give output an object where all form elements that use
     the nested naming convention (member[0], member[1] etc.) are combined and added to an array.
     Then we can filter it out, and use setValue from react-hook-form to manually set the new values.
     memberCount determines the number of inputs to display, so they should always be in sync
  */
  const removeMember = index => {
    const { members } = getValues({ nest: true })
    const newMembers = members.filter((value, i) => i !== index)
    newMembers.map((member, i) => setValue(`members[${i}]`, member))
    setMemberCount(memberCount - 1)
  }

  return (
    <Stack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      w={{ sm: '100%', lg: '20%' }}
    >
      <Input
        label="Trip"
        name="tripName"
        refName={register({ required: 'Enter a trip name' })}
        error={errors.tripName && errors.tripName.message}
      />

      <Input
        label="Description"
        name="description"
        refName={register}
      />

      <MemberInputs
        register={register}
        memberCount={memberCount}
        setMemberCount={setMemberCount}
        removeMember={removeMember}
      />
      <Button type="submit" mt="2rem" isLoading={loading}>
        Create Trip
      </Button>
    </Stack>
  )
}

export default CreateTripForm
