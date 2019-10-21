import React from 'react'
import Link from './Link'

const CTA = ({ children, to, onClick, mt }) => (
  <Link
    bg="green.400"
    w="100%"
    fontSize="lg"
    borderRadius="8px"
    textAlign="center"
    textDecoration="none"
    p="0.5rem"
    border="1px solid black"
    to={to}
    onClick={onClick}
    mt={mt}
  >
    {children}
  </Link>
)

export default CTA
