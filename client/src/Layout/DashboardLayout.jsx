import React from "react";
import { Box } from "@chakra-ui/react";

function index({ children }) {
  return (
    <Box as='section'>
      {children}
    </Box>
  );
}

export default index;
