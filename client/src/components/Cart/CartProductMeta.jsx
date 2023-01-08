import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { FiGift } from "react-icons/fi";

export const CartProductMeta = (props) => {
  const {
    isGiftWrapping = false,
    image,
    name,
    body,
    description,
  } = props;
  return (
    <Stack direction="row" spacing="5" width={"full"}>
      <Box>
        <>
          <Image
            w={120}
            rounded="lg"
            src={image}
            alt={name}
            draggable="false"
            loading="lazy"
          />
        </>
      </Box>
      <Box pt="4">
        <Stack spacing="0.5">
          <Text fontWeight="medium">{name}</Text>

          <Flex fontWeight="medium">
            Beden:{" "}
            <Text
              fontWeight="normal"
              color={mode("gray.600", "gray.400")}
              fontSize="sm"
            >
              {body}
            </Text>
          </Flex>
        </Stack>

        {isGiftWrapping && (
          <HStack spacing="1" mt="3" color={mode("gray.600", "gray.400")}>
            <Icon as={FiGift} boxSize="4" />
            <Link fontSize="sm" textDecoration="underline">
              Add gift wrapping
            </Link>
          </HStack>
        )}
      </Box>
    </Stack>
  );
};
