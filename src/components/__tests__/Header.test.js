import React from 'react'
import '@testing-library/jest-dom/extend-expect'

import { renderWithRouter } from '../../utils/test-utils'
import Header from '../Header'

describe('<Header />', () => {
  it('renders a sign in button if a user is not signed in', () => {
    const { getByText } = renderWithRouter(<Header />, {
      loggedIn: false,
    })
    const signInButton = getByText('Sign In')
    expect(signInButton).toBeVisible()
  })

  it('renders a sign out button if a user is signed in', () => {
    const { getByText } = renderWithRouter(<Header />, {
      loggedIn: true,
    })
    const signInButton = getByText('Sign Out')
    expect(signInButton).toBeVisible()
  })

  it('renders the Split it logo', () => {
    const { getByTestId } = renderWithRouter(<Header />)
    const logo = getByTestId('logo')
    expect(logo).toBeVisible()
  })
})
