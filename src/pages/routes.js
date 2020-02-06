import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../utils/privateRoute'
import TripPage from './trip'
import CreateTripPage from './createTrip'
import LandingPage from './landing'
import MyTripsPage from './myTrips'
import { useUserContext } from '../providers/UserProvider'

const AppRoutes = () => {
  const user = useUserContext()
  return (
    <>
      <Route path="/trip/:tripId" component={TripPage} />
      <PrivateRoute path="/create-trip" component={CreateTripPage} />
      <Route path="/myTrips" component={MyTripsPage} />
      <Route exact path="/">
        {user ? <Redirect to="/myTrips" /> : <LandingPage />}
      </Route>
    </>
  )
}

export default AppRoutes
