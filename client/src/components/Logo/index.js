import React from "react";
import { Box, Text } from "@chakra-ui/react";

import styles from "./index.module.css";

function index() {
  return (
    <>
      <Box>
        <span id={styles.brand}>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="3xl"
            fontWeight="extrabold"
          >
            EflatunButik
          </Text>
        </span>
      </Box>
    </>
  );
}

export default index;
