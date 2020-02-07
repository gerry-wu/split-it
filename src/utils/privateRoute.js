import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../providers/UserProvider'

function PrivateRoute({ component: Component, ...rest }) {
  const user = useUserContext()
  console.log('user: ', user)
  return (
    <Route
      {...rest}
      render={props => {
        console.log('props in router', props)
        return user ? (
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
