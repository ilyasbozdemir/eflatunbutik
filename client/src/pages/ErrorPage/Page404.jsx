import React from "react";

import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./style.css";
import SearchBox from "../../components/Header/SearchBox";

function Page404() {
  return (
    <>
      <Stack
        spacing={3}
        w={{ base: "container.xs", lg: "container.lg" }}
        h={{ base: "container.xs", lg: "container.lg" }}
      >
        <Box>
          <Flex
            textAlign={{ base: "center", lg: "flex-start" }}
            justifyContent={{ base: "center", lg: "flex-start" }}
          >
            <Link to="/">
              <Logo />
            </Link>
          </Flex>
        </Box>
        <Flex
          direction={"column"}
          textAlign={"center"}
          justifyContent={"center"}
        >
          <Text fontSize="6xl">404</Text>
          <Text fontSize="sm">Aradığın içeriğe ulaşamadık.</Text>
          <Box display={"center"} justifyContent={"center"} mt={3}>
            <SearchBox w={400} />
          </Box>
          <Box>
            <>
              <>
                <Button
                  as={Link}
                  to="/"
                  mt={3}
                  w={250}
                  fontSize={18}
                  variant="primary"
                  color={"white"}
                  bg={useColorModeValue("gray.100", "gray.700")}
                  bgGradient={"linear(to-l, #7928CA, #FF0080)"}
                  opacity={2}
                >
                  Alışverişe devam et
                </Button>
              </>
            </>
          </Box>
        </Flex>
      </Stack>
    </>
  );
}

export default Page404;
