import React from "react";
import { IconButton } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
function SettingSidebarButton({ onOpen }) {
  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="settings button"
        icon={<SettingsIcon />}
        size="xl"
        bg="transparent"
      />
    </>
  );
}

export default SettingSidebarButton;