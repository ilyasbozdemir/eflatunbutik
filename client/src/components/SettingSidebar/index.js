import ReactFlagsSelect from "react-flags-select";
import { GrSystem } from "react-icons/gr";
import { BiArrowFromLeft, BiArrowToLeft } from "react-icons/bi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { useState as UseState } from "react";
import {
  IconButton,
  Flex,
  useColorMode as UseColorMode,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  ButtonGroup,
  Text,
  HStack,
  Stack,
  CloseButton,
  Badge,
  Tooltip,
} from "@chakra-ui/react";

import { IconContext } from "react-icons";

function index({ isOpen, onOpen, onClose }) {
  const { colorMode, toggleColorMode } = UseColorMode();
  const [selected, setSelected] = UseState("TR");
  const arrowFromLeft = () => {};
  const arrowToLeft = () => {};

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
  const setSystemMode = () => {};
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
              {" "}
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
                  <Text fontWeight="semibold">
                    {"Tema : "}
                    <Badge variant="outline" colorScheme="green">
                      Yeni
                    </Badge>
                  </Text>
                </Tooltip>
              </Stack>
              <ButtonGroup size="xl" isAttached variant="outline" p="5">
                <Tooltip label="Gündüz moduna uyarla">
                  <IconButton
                    onClick={setDarkMode}
                    aria-label="Gündüz moduna uyarla"
                    icon={<SunIcon />}
                    size="md"
                    bg="transparent"
                  />
                </Tooltip>
                <Tooltip label="System moduna uyarla">
                  <IconButton
                    onClick={setSystemMode}
                    aria-label="set system mode"
                    icon={<GrSystem />}
                    size="md"
                    bg="transparent"
                    disabled
                  />
                </Tooltip>
                <Tooltip label="Koyu moduna uyarla">
                  <IconButton
                    onClick={setLightMode}
                    aria-label="set light mode"
                    icon={<MoonIcon />}
                    size="md"
                    bg="transparent"
                  />
                </Tooltip>
              </ButtonGroup>
            </HStack>

            <HStack>
              <Text>
                <Stack direction="row">
                  <Tooltip label="Site metin yönünü ayarı örnek arapça dili sağdan soladır.">
                    <Text fontWeight="semibold">
                      {"Yön : "}
                      <Badge colorScheme="red">Yakında</Badge>
                    </Text>
                  </Tooltip>
                </Stack>
              </Text>

              <ButtonGroup size="xl" isAttached variant="outline" p="5">
                <Tooltip label="Sağdan sola hizala">
                  <IconButton
                    onClick={arrowToLeft}
                    aria-label="BiArrowToLeft"
                    icon={<BiArrowToLeft />}
                    size="md"
                    bg="transparent"
                    disabled
                  />
                </Tooltip>
                <Tooltip label="Soldan sağa hizala.">
                  <IconButton
                    onClick={arrowFromLeft}
                    aria-label="BiArrowFromLeft"
                    icon={<BiArrowFromLeft />}
                    size="md"
                    bg="transparent"
                    disabled
                  />
                </Tooltip>
              </ButtonGroup>
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

export default index;
