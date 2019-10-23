import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'
import Input from '../../components/Input'
import useForm from 'react-hook-form'

const CreateTripForm = ({ setTrip }) => {
  const history = useHistory()

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data)
    //event.preventDefault()
    //TODO: validate form
    //TODO: send to DB, get response

    //then set state if successful
    setTrip({
      name: data.tripName,
      description: data.description,
      members: ['Gerry', 'Felipe', 'Disha'],
    })

    history.push('/trip')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Trip"
          name="tripName"
          refName={register({ required: 'Enter a trip name' })}
          error={errors.tripName && errors.tripName.message}
        />

        <Input
          label="Description"
          name="description"
          refName={register({ required: 'Enter a trip description' })}
          error={errors.description && errors.description.message}
        />
        <Button type="submit">Create Trip</Button>
      </form>
    </>
  )
}

export default CreateTripForm
