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

const DateInput = () => {
  const [selectedDay, setSelectedDay] = useState(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [value, setValue] = useState(dateToShortDate(selectedDay))
  const handleClick = () => setIsCalendarOpen(!isCalendarOpen)
  const handleDayClick = day => {
    setSelectedDay(day)
    setIsCalendarOpen(false)
    setValue(dateToShortDate(day))
  }
  const handleChange = e => {
    const {
      target: { value: input },
    } = e
    setValue(input)
    Date.parse(input)
      ? setSelectedDay(new Date(input))
      : setSelectedDay()
  }

  return (
    <>
      <FormControl isRequired>
        <FormLabel htmlFor="date">Date</FormLabel>
        <InputGroup mb={isCalendarOpen ? 0 : 5}>
          <Input
            id="date"
            name="date"
            value={value}
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
      </FormControl>
    </>
  )
}

export default DateInput
