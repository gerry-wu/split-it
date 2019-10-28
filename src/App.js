import React from 'react'
import CreateTripPage from './pages/CreateTrip/'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import db from './utils/firestore'

function App() {
  console.log(db)

  return (
    <ThemeProvider>
      <CSSReset />
      <CreateTripPage />
    </ThemeProvider>
  )
}

export default App
