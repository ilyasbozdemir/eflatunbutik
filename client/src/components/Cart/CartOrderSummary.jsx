import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";

import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import TermsOfUseComponent from "../TermsOfUseComponent";
import { AiOutlineClose } from "react-icons/ai";
const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const CartOrderSummary = () => {
  const {
    isOpen: isOpenCoupon,
    onOpen: onOpenCoupon,
    onClose: onCloseCoupon,
  } = useDisclosure(); //
  const {
    isOpen: isOpenConditions,
    onOpen: onOpenConditions,
    onClose: onCloseConditions,
  } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [couponCode, setCouponCode] = React.useState("");

  return (
    <>
      <>
        <Modal isOpen={isOpenConditions} onClose={onCloseConditions}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kullanım Koşulları</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TermsOfUseComponent />
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="pink"
                mr={3}
                onClick={onCloseConditions}
              >
                Onayla ve Kapat
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <></>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpenCoupon}
          onClose={onCloseCoupon}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kupon Kodu</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text as="small">
                Bir kupon kodunuz varsa aşağıdaki alana girdikten sonra uygula
                düğmesine basınız
              </Text>
              <form>
                <FormControl>
                  <InputGroup>
                    <InputRightElement>
                      <IconButton
                        variant="link"
                        aria-label="write coupon code"
                        icon={<AiOutlineClose />}
                        onClick={() => {
                          setCouponCode("");
                          initialRef.current.focus();
                        }}
                      />
                    </InputRightElement>
                    <Input
                      type={"text"}
                      value={couponCode}
                      onChange={(e) => {
                        setCouponCode(e.target.value);
                      }}
                      ref={initialRef}
                      placeholder="Kupon Kodu:"
                    />
                  </InputGroup>
                </FormControl>
              </form>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="pink"
                color={"white"}
                mr={1}
                onClick={(e) => {
                  onCloseCoupon();
                }}
              >
                Uygula
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

      <Stack
        spacing="8"
        borderWidth="1px"
        rounded="lg"
        padding="8"
        width="full"
      >
        <Heading size="md">Sipariş Özeti</Heading>

        <Stack spacing="6">
          <OrderSummaryItem
            label="Ara Toplam"
            value={formatPrice(190.99 + 290.99 + 390.99)}
          />
          <OrderSummaryItem
            label="Kdv Toplam"
            value="₺69,8376"
          ></OrderSummaryItem>
          <OrderSummaryItem label="Kargo" value="₺25"></OrderSummaryItem>
          <OrderSummaryItem label="Kupon Kodu">
            <Text
              as={"span"}
              color={"pink.500"}
              textDecor="underline"
              cursor={"pointer"}
              onClick={onOpenCoupon}
            >
              tanımla
            </Text>
          </OrderSummaryItem>
          <Flex justify="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Toplam
            </Text>
            <Text fontSize="xl" fontWeight="extrabold">
              {formatPrice(190.99 + 290.99 + 390.99)}
            </Text>
          </Flex>
        </Stack>
        <Button
          colorScheme="pink"
          size="lg"
          fontSize="md"
          rightIcon={<FaArrowRight />}
          ref={finalRef}
        >
          Alışverişi Tamamla
        </Button>

        <Text as="small">
          Alışverişi tamamla düğmesine tıklayarak,
          <Text
            as={"span"}
            color={"pink.500"}
            textDecor="underline"
            cursor={"pointer"}
            onClick={onOpenConditions}
          >
            {" Kullanım Koşulları"}
          </Text>
          'mızı kabul etmiş olursunuz.
        </Text>
      </Stack>
    </>
  );
};
