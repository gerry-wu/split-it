import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@chakra-ui/core'
import { useAuth } from '../hooks/useAuth'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

/* This will always break in tests if we don't mock this,
   because we're getting firebase from the browser.
   The 2nd parameter allows us to specify what should be returned when
   this module is called in a component */
jest.mock('../firebase/auth', () => ({}))

//This allows us to mock its implementation in setUseAuthResponse
jest.mock('../hooks/useAuth', () => ({
  useAuth: jest.fn(),
}))

const signedInUser = {
  user: {
    uid: '123456',
    displayName: 'Test User',
    email: 'test@user.com',
  },
}

//Mock out useAuth to return a user object or false
const setUseAuthResponse = loggedIn => {
  if (loggedIn) useAuth.mockImplementation(() => signedInUser)
  else useAuth.mockImplementation(() => false)
}

const Provider = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

const customRender = (ui, { loggedIn = false } = {}, options) => {
  setUseAuthResponse(loggedIn)
  return render(ui, { wrapper: Provider, ...options })
}

/* Right now this isn't used, but I'm going to leave it in because we should do some router
   testing at some point, and I think this would work.
   */
export const renderWithRouter = (
  ui,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
    loggedIn = false,
  } = {},
) => {
  const Wrapper = ({ children }) => (
    <Provider>
      <Router history={history}>{children}</Router>
    </Provider>
  )
  setUseAuthResponse(loggedIn)

  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  }
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
