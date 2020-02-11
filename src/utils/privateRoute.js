import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function PrivateRoute({ component: Component, ...rest }) {
  const auth = useAuth()
  return (
    <Route
      {...rest}
      render={props => {
        return auth.user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { referrer: props.location.pathname },
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute
