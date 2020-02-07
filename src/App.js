import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import UserProvider from './providers/UserProvider'
import AppRoutes from './pages/routes'
import Header from './components/header'
import customTheme from './customTheme'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <UserProvider>
        <Router>
          <Header />
          <Switch>
            <AppRoutes />
          </Switch>
        </Router>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
