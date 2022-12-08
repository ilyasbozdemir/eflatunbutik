import React from "react";
import { Box, Text } from "@chakra-ui/react";

import styles from "./index.module.css";

function index() {
  return (
    <>
      <Box>
        <span id={styles.brand}>
          <Text
            bgGradient="linear(to-r, #e0218a, #720b93)"
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
