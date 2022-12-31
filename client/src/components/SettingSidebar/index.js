import ReactFlagsSelect from "react-flags-select";
import { GrSystem } from "react-icons/gr";
import { BiArrowFromLeft, BiArrowToLeft } from "react-icons/bi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useState as UseState } from "react";
import {
  Flex,
  useColorMode as UseColorMode,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  HStack,
  Stack,
  CloseButton,
  Badge,
  Tooltip,
  Box,
  useRadioGroup,
  useRadio,
  Text,
} from "@chakra-ui/react";

function SettingSidebarButton({ isOpen, onOpen, onClose }) {
  const { setColorMode, colorMode, toggleColorMode } = UseColorMode();
  const [selected, setSelected] = UseState("TR");

  const setDarkMode = () => {
    if (colorMode !== "light") {
      toggleColorMode();
    }
  };
  const setLightMode = () => {
    if (colorMode === "light") {
      toggleColorMode();
    }
  };
  const setSystemMode = () => {
    setColorMode("system");
  };

  const options = ["light", "system", "dark"];

  const onChangeHandled = (value) => {
    if (value !== "light") {
      setLightMode();
    } else if (value === "light") {
      setDarkMode();
    } else {
      setSystemMode();
    }
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "dark-mode",
    defaultValue: "system",
    onChange: onChangeHandled,
  });
  const group = getRootProps();

  return (
    <>
      <Drawer placement={"right"} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex
            h="20"
            alignItems="center"
            mx="8"
            justifyContent="space-between"
          >
            <Text fontWeight="bold" fontSize={25}>
              Ayarlar
            </Text>
            <CloseButton
              display={{ base: "flex", md: "flex" }}
              onClick={onClose}
            />
          </Flex>
          <DrawerBody justifyContent="space-evenly">
            <HStack textAlign={"center"}>
              <Stack direction="row">
                <Tooltip label="Site tema rengini ayarlayın">
                  <Text fontWeight="semibold">{"Tema : "}</Text>
                </Tooltip>
              </Stack>

              <HStack {...group}>
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <RadioCard key={value} {...radio}>
                      {value}
                    </RadioCard>
                  );
                })}
              </HStack>
            </HStack>

            <HStack>
              <Tooltip label="varsayılan site dilini ayarlayın.">
                <Text fontWeight="semibold">
                  {"Dil : "}
                  <Badge colorScheme="purple"></Badge>
                </Text>
              </Tooltip>
              <ReactFlagsSelect
                countries={["TR"]}
                selected={selected}
                onSelect={(code) => {
                  setSelected(code);
                }}
              />
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.500",
          color: "white",
          borderColor: "teal.500",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default SettingSidebarButton;
