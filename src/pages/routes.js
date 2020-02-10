import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from '../utils/privateRoute'
import TripPage from './trip'
import CreateTripPage from './createTrip'
import LandingPage from './landing'
import MyTripsPage from './myTrips'
import LoginPage from './login'
import { useAuth } from '../hooks/useAuth'

const AppRoutes = () => {
  const auth = useAuth()
  return (
    <>
      <PrivateRoute path="/trip/:tripId" component={TripPage} />
      <PrivateRoute path="/create-trip" component={CreateTripPage} />
      <PrivateRoute path="/myTrips" component={MyTripsPage} />
      <Route
        exact
        path="/"
        component={auth.user ? MyTripsPage : LandingPage}
      />
      <Route path="/login" component={LoginPage} />
    </>
  )
}

export default AppRoutes
