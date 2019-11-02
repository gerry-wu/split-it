import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { render } from 'test-utils'
import AddMemberButton from './AddMemberButton'

describe('<AddMemberButton />', () => {
  it('renders the correct singular string when plural prop is false', () => {
    const { getByRole } = render(<AddMemberButton plural={false} />)
    expect(getByRole('button')).toHaveTextContent('Add a member')
  })

  it('renders the correct pluralized string when the plural prop is true', () => {
    const { getByRole } = render(<AddMemberButton plural={true} />)
    expect(getByRole('button')).toHaveTextContent(
      'Add another member',
    )
  })
})
