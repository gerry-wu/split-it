import React from 'react'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { AuthProvider } from './hooks/useAuth'
import AppRoutes from './pages/routes'
import Header from './components/Header'
import customTheme from './customTheme'

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <AppRoutes />
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
