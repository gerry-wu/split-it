import React, { useState } from 'react'
import CreateTripPage from './pages/createTrip'
import TripPage from './pages/trip'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
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
