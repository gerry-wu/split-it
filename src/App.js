import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { ProvideAuth } from './hooks/useAuth'
import AppRoutes from './pages/routes'
import Header from './components/header'
import customTheme from './customTheme'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <ProvideAuth>
        <Router>
          <Header />
          <Switch>
            <AppRoutes />
          </Switch>
        </Router>
      </ProvideAuth>
    </ThemeProvider>
  )
}

export default App
