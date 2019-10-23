import React, { useState } from 'react'
import { Box, Button } from '@chakra-ui/core'
import { useHistory } from 'react-router-dom'
import Input from '../../components/Input'

const CreateTripForm = ({ setTrip }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
  })

  const history = useHistory()

  const handleSubmit = event => {
    event.preventDefault()
    //TODO: validate form
    //TODO: send to DB, get response

    //then set state if successful
    setTrip({
      name: formValues.name,
      description: formValues.description,
      members: ['Gerry', 'Felipe', 'Disha'],
    })

    history.push('/trip')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Trip"
          value={formValues.name}
          onChange={event =>
            setFormValues({ ...formValues, name: event.target.value })
          }
          inputId="tripName"
        />
        <Input
          label="Description"
          value={formValues.description}
          onChange={event =>
            setFormValues({
              ...formValues,
              description: event.target.value,
            })
          }
          inputId="tripName"
        />
        <Button type="submit">Create Trip</Button>
      </form>
    </>
  )
}

export default CreateTripForm
