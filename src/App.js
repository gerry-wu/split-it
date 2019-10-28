import React, { useState } from 'react'
import CreateTripPage from './pages/createTrip'
import TripPage from './pages/trip'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
<<<<<<< HEAD
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

function App() {
  const [trip, setTrip] = useState({
    id: '1234', //TODO: Generate this from the DB
    name: 'Placeholder Trip',
    description: 'Cool Trip description',
    members: ['Mitch', 'Gerry', 'Felipe', 'Disha'],
  })
=======
import db from './utils/firestore'

function App() {
  console.log(db)
>>>>>>> setup firestore and update script

  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Switch>
          <Route
            path="/trip"
            render={routeProps => (
              <TripPage {...routeProps} trip={trip} />
            )}
          />
          <Route
            path="/"
            render={routeProps => (
              <CreateTripPage setTrip={setTrip} />
            )}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
