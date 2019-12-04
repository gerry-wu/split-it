import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import TripPage from './trip'
import CreateTripPage from './createTrip'
import LoginPage from './login'
import { UserContext } from '../providers/UserProvider'

const AppRoutes = ({ trip, setTrip }) => {
  const user = useContext(UserContext)

  return (
    <>
      <Route path="/trip/:tripId" component={TripPage} />
      <Route exact path="/">
        {user ? <Redirect to="/create-trip" /> : <LoginPage />}
      </Route>
      <Route
        path="/create-trip"
        render={routeProps => <CreateTripPage setTrip={setTrip} />}
      />
    </>
  )
}

export default AppRoutes
