import React from 'react'
import CreateTripPage from './pages/CreateTrip/'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <CreateTripPage />
    </ThemeProvider>
  )
}

export default App
