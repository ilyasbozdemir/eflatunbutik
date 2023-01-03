import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useState  } from "react";
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
  Tooltip,
  Box,
  useRadioGroup,
  useRadio,
  Text,
  Select,
  Badge,
  DrawerFooter,
} from "@chakra-ui/react";

import { VscSignOut } from "react-icons/vsc";

import "./index.css";

function SettingSidebarButton({ isOpen, onOpen, onClose }) {
  const { setColorMode, colorMode, toggleColorMode } = UseColorMode();

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

  const options = [
    {
      value: "light",
      icon: <SunIcon />,
      label: "Gündüz moduna uyarla",
    },
    {
      value: "system",
      icon: <MdOutlineSystemUpdateAlt />,
      label: "Sistem moduna uyarla",
    },
    {
      value: "dark",
      icon: <MoonIcon />,
      label: "Gece moduna uyarla",
    },
  ];

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
                {options.map((option) => {
                  const radio = getRadioProps({ value: option.value });
                  return (
                    <RadioCard
                      key={option.value}
                      {...radio}
                      label={option.label}
                    >
                      {option.icon}
                    </RadioCard>
                  );
                })}
              </HStack>
            </HStack>

            <HStack mt={3}>
              <Flex
                direction={"row"}
                textAlign={"center"}
                justifyContent={"center"}
                gap={2}
              >
                <Tooltip label="varsayılan site dilini ayarlayın.">
                  <Text fontWeight="semibold">
                    {"Dil : "}
                    <Badge colorScheme="purple"></Badge>
                  </Text>
                </Tooltip>
                <SelectFlag onChange={() => {}} />
              </Flex>
            </HStack>
          </DrawerBody>
          <DrawerFooter>
            <Flex>
              <Icon as={VscSignOut} />
            </Flex>
          </DrawerFooter>
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
    <Tooltip label={props.label}>
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
          px={5}
          py={3}
          aria-label={`set ${props.label}`}
        >
          {props.children}
        </Box>
      </Box>
    </Tooltip>
  );
}

const SelectFlag = ({ onChange }) => {
  return (
    <Tooltip label={"Dil seçimi yapın"}>
      <Select
        pointer={"cursor"}
        size={"sm"}
        w={"100%"}
        name="siralama"
        onChange={onChange}
      >
        <option value="tr">Türkçe</option>
      </Select>
    </Tooltip>
  );
};

export default SettingSidebarButton;
