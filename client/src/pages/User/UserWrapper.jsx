import { Box } from '@chakra-ui/react'
import React from 'react'


function UserWrapper({ children }) {
  return (
    <Box as='section'>
    {children}
  </Box>
  )
}
export default UserWrapper
