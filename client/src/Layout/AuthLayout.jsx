import React from 'react'
import { Box } from "@chakra-ui/react";

function AuthLayout({ children }) {
  return (
    <Box as='section'>
    {children}
  </Box>
  )
}

export default AuthLayout