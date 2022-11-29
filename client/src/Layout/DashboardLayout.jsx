import React from "react";

import Header from "../components/Dashboard/Header";
import Sidebar from "../components/Dashboard/Sidebar";

import { Box } from "@chakra-ui/react";

function index({ children }) {
  return (
    <Box>
      {/*= add children components =*/}
      {children}
    </Box>
  );
}

export default index;
