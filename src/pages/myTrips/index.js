import React from 'react'
import { Link } from 'react-router-dom'

const MyTripsPage = () => (
  <>
    <h2>Trips Page</h2>
    <Link to="/create-trip">Create a new trip!</Link>
  </>
)

export default MyTripsPage
