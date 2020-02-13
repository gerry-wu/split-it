import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render } from '../../utils/test-utils'
import Input from '../Input'

const errorText = 'Error occurred'
const label = 'City'
const name = 'city'

const TestInput = <Input label={label} name={name} />
const TestErrorInput = (
  <Input label="City" name="city" error={errorText} />
)

describe('<Input />', () => {
  it('should contain a label element', () => {
    const { getByLabelText } = render(TestInput)
    const input = getByLabelText(label)
    expect(input).toBeVisible()
  })
  describe('Error state', () => {
    it('should not render an error element when no error is passed', () => {
      const { queryByText } = render(TestInput)
      expect(queryByText(errorText)).not.toBeInTheDocument()
    })

    it('should render an error element if an error is passed', () => {
      const { queryByText } = render(TestErrorInput)
      expect(queryByText(errorText)).toBeVisible()
    })

    it('should be aria-describedby the error element', () => {
      const describedById = `${name}-error`
      const { getByLabelText } = render(TestErrorInput)
      const input = getByLabelText(label)
      expect(input).toHaveAttribute('aria-describedby', describedById)
    })
  })
})
