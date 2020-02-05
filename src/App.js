import React, { useState } from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import UserProvider from './providers/UserProvider'
import AppRoutes from './pages/routes'
import Header from './components/header'

function App() {
  const [trip, setTrip] = useState({
    id: '1234', //TODO: Generate this from the DB
    name: 'Placeholder Trip',
    description: 'Cool Trip description',
    members: ['Mitch', 'Gerry', 'Felipe', 'Disha'],
  })

  console.log('hello')

  return (
    <ThemeProvider>
      <CSSReset />
      <UserProvider>
        <Router>
          <Header />
          <Switch>
            <AppRoutes trip={trip} setTrip={setTrip} />
          </Switch>
        </Router>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
