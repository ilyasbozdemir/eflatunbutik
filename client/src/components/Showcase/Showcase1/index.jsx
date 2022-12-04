import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";

import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Skeleton,
  Stack,
  Text,
  useColorModeValue as UseColorModeValue,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import Logo from "../../Logo";

function index() {
  const handleType = (count) => {};
  const handleDone = () => {};
  return (
    <>
      <Box
        mt={4}
        maxW="7xl"
        mx="auto"
        px={{
          base: "0",
          lg: "12",
        }}
        py={{
          base: "0",
          lg: "12",
        }}
      >
        <Stack
          direction={{
            base: "column-reverse",
            lg: "row",
          }}
          spacing={{
            base: "0",
            lg: "20",
          }}
        >
          <Box
            width={{
              lg: "sm",
            }}
            transform={{
              base: "translateY(-50%)",
              lg: "none",
            }}
            bg={{
              base: UseColorModeValue("red.50", "gray.700"),
              lg: "transparent",
            }}
            mx={{
              base: "6",
              md: "8",
              lg: "0",
            }}
            px={{
              base: "6",
              md: "8",
              lg: "0",
            }}
            py={{
              base: "6",
              md: "8",
              lg: "12",
            }}
          >
            <Stack
              spacing={{
                base: "8",
                lg: "10",
              }}
            >
              <Stack
                spacing={{
                  base: "2",
                  lg: "4",
                }}
              >
                <Heading size="xl">
                  <Logo />
                </Heading>
                <Heading size="lg" fontWeight="normal">
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    <Typewriter
                      loop
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      onLoopDone={handleDone}
                      onType={handleType}
                      words={["xxxxxxxxxxx", "yyyyyyyyyyy", "zzzzzzzzzzz"]}
                    />
                  </span>
                  {" eflatunbutik.com'da"}
                </Heading>
              </Stack>
              <HStack spacing="3">
                <Text
                  as={Link}
                  color={UseColorModeValue("red.500", "red.300")}
                  fontWeight="bold"
                  fontSize="lg"
                  to="/"
                >
                  Şimdi keşfedin
                </Text>

                <Icon
                  color={UseColorModeValue("red.500", "red.300")}
                  as={FaArrowRight}
                />
              </HStack>
            </Stack>
          </Box>
          <Flex flex="1" overflow="hidden">
            <Image
              src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              minW="300px"
              objectFit="cover"
              flex="1"
            />
            <Image
              display={{
                base: "none",
                sm: "initial",
              }}
              src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              alt="Lovely Image"
              fallback={<Skeleton />}
              maxH="450px"
              objectFit="cover"
            />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

export default index;
