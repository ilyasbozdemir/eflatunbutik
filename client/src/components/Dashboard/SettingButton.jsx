import React from "react";
import { Box, Button, Icon } from "@chakra-ui/react";

import { AiOutlineSetting } from "react-icons/ai";

function SettingButton({ onOpen }) {
  return (
    <Box
      onClick={onOpen}
      aria-label="settings button"
      borderRadius={"50% 50%"}
      bg={"white"}
      position={"fixed"}
      bottom={"40px"}
      right={"15px"}
      zIndex={100}
      boxShadow={
        "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -2px 2px"
      }
      _hover={{
        bg: "gray.200",
      }}
    >
      <Button>
        <Icon
          size="lg"
          variant="ghost"
          aria-label="open setting menu"
          as={AiOutlineSetting}
        />
      </Button>
    </Box>
  );
}

export default SettingButton;
