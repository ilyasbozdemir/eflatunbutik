import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useColorModeValue,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Textarea } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import AddressCard from "../components/AddressCard";
import CartOrderSummaryAddress from "../components/CartOrderSummaryAddress";

function ProductAddress() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box maxW={{ base: "3xl", lg: "7xl" }} py={3}>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          align={{
            lg: "flex-start",
          }}
          spacing={{
            base: "8",
            md: "16",
          }}
        >
          <Stack
            spacing={{
              base: "8",
              md: "10",
            }}
            flex="2"
          >
            <Stack spacing="6" w={"full"}>
              <Stack
                direction={{
                  sm: "row",
                }}
                justifyContent={"center"}
              >
                <Button
                  variant={"ghost"}
                  color={"white"}
                  bg={"pink.500"}
                  _hover={{ color: "white", bg: "pink.700" }}
                  onClick={onOpen}
                >
                  Yeni Adres Ekle
                </Button>

                <SetModal isOpen={isOpen} onClose={onClose} isNewAddress />

                <Stack
                  direction={{
                    sm: "row",
                  }}
                  maxW={{
                    lg: "360px",
                  }}
                >
                  <Input
                    placeholder="Ara"
                    type="text"
                    w={{ base: "full", md: "350px" }}
                  />
                  <IconButton
                    color="pink.500"
                    type="submit"
                    flexShrink={0}
                    icon={<BsSearch />}
                  />
                </Stack>
              </Stack>
              <Wrap>
                <WrapItem>
                  <AddressCard
                    title={"test title"}
                    addressContent={
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae aperiam nobis adipisci cum nemo amet aliquam aut dicta voluptate necessitatibus, molestias hic ipsam mollitia fuga ipsum repellendus ducimus alias incidunt?"
                    }
                    editButtonClick={onOpen}
                  />
                </WrapItem>
              </Wrap>
            </Stack>
          </Stack>

          <Flex direction="column" flex="1">
            <CartOrderSummaryAddress />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}

function SetModal(props) {
  const { isOpen, onClose, isNewAddress } = props;
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {isNewAddress === true ? <>Yeni Adres Ekle</> : <>Adres Düzenle</>}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Adres Başlığı :</FormLabel>
                <Input ref={initialRef} placeholder="Örn. Ev Adresim" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Ad :</FormLabel>
                <Input />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Soyad :</FormLabel>
                <Input />
              </FormControl>

              <FormControl>
                <FormLabel>E-Posta Adresi :</FormLabel>
                <Input type={"email"} />
              </FormControl>

              <FormControl>
                <FormLabel>Telefon :</FormLabel>
                <InputGroup>
                  <InputLeftAddon children="+90" />
                  <Input type="tel" placeholder="Telefon" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Ülke :</FormLabel>
                <Select>
                  <option value="TR">Türkiye</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>İl :</FormLabel>
                <Select placeholder="İl Seçiniz">
                  <option value="option1">Option 1</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>İlçe :</FormLabel>
                <Select placeholder="İlçe Seçiniz">
                  <option value="option1">Option 1</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Adres :</FormLabel>
                <Textarea
                  placeholder="Here is a sample placeholder"
                  size="sm"
                />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={onClose}>
              Kaydet
            </Button>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Kapat
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ProductAddress;
