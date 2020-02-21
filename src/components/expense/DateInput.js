import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Collapse,
} from '@chakra-ui/core'
import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'
import { dateToShortDate } from '../../utils/date'
import InputError from '../InputError'

const DateInput = ({ name, register, error, setValue }) => {
  const [selectedDay, setSelectedDay] = useState()
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const handleClick = () => setIsCalendarOpen(!isCalendarOpen)
  const handleDayClick = day => {
    setSelectedDay(day)
    setIsCalendarOpen(false)
    setValue(name, dateToShortDate(day))
  }
  const handleChange = e => {
    const {
      target: { value: input },
    } = e
    setValue(name, input)
    Date.parse(input)
      ? setSelectedDay(new Date(input))
      : setSelectedDay()
  }

  return (
    <FormControl mb={isCalendarOpen ? 0 : 3}>
      <FormLabel htmlFor="date">Date</FormLabel>
      <InputGroup>
        <Input
          id={name}
          name={name}
          ref={register({ required: 'Please enter a date' })}
          isInvalid={error ? true : false}
          errorBorderColor="red.300"
          aria-describedby={`${name}-error`}
          onChange={handleChange}
        />
        <InputRightElement>
          <IconButton
            variant="outline"
            aria-label="calendar"
            icon="calendar"
            fontSize="20px"
            onClick={handleClick}
          />
        </InputRightElement>
      </InputGroup>
      <Collapse
        isOpen={isCalendarOpen}
        style={{ lineHeight: 'normal' }}
      >
        <DayPicker
          onDayClick={handleDayClick}
          selectedDays={selectedDay}
          month={selectedDay}
        />
      </Collapse>
      {error && (
        <InputError inputName={name}>{error.message}</InputError>
      )}
    </FormControl>
  )
}

export default DateInput
