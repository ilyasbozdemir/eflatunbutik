import { Icon, IconButton, LightMode } from "@chakra-ui/react";
import * as React from "react";
import { FiHeart } from "react-icons/fi";
import { useDisclosure as UseDisclosure } from "@chakra-ui/react";

const { onToggle } = UseDisclosure();

const icon = <Icon as={FiHeart} transition="all 0.15s ease" />;

export const FavouriteButton = (props) => (
  <LightMode>
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      _hover={{
        transform: "scale(1.2)",
      }}
      sx={{
        ":hover > svg": {
          transform: "scale(1.2)",
        },
      }}
      transition="all 0.15s ease"
      icon={icon}
      boxShadow="base"
      {...props}
    />
  </LightMode>
);
