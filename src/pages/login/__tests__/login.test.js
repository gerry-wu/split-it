import React from 'react'
import { render, wait } from '../../../utils/test-utils'
import LoginPage from '../'
import { Redirect as MockRedirect } from 'react-router-dom'

//Make Redirect a jest function so we can assert it has been called
jest.mock('react-router-dom', () => {
  return {
    Redirect: jest.fn(() => null),
  }
})

describe('Login page', () => {
  it('should render an alert if the location state property is present', () => {
    const { getByText, getByRole } = render(
      <LoginPage
        location={{ state: { referrer: '/create-trip' } }}
      />,
    )
    expect(getByText('Please Login before Continuing')).toBeTruthy()
    expect(getByRole('alert')).toBeTruthy()
  })

  it('should not render an alert if the location state property is not present', () => {
    const { queryByText, queryByRole } = render(
      <LoginPage location="" />,
    )
    expect(queryByText('Please Login before Continuing')).toBeFalsy()
    expect(queryByRole('alert')).toBeFalsy()
  })

  it('should redirect to the homepage if the user is logged in', async () => {
    render(<LoginPage location="" />, {
      loggedIn: true,
    })
    //Since this would be asynchronous, we can use the RTL wait function to ensure that it occurs
    await wait(() => expect(MockRedirect).toHaveBeenCalledTimes(1))
  })
})
