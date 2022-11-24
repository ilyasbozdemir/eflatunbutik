import React, { useState as UseState } from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { useFormik } from "formik";
import { register } from "../../firebase/auth";

import * as Yup from "yup";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  Center,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

const validationSchema = Yup.object({
  uyeOlName: Yup.string().required("Zorunlu alan"),
  uyeOlSurname: Yup.string().required("Zorunlu alan"),
  uyeOlEmail: Yup.string()
    .email("Geçersiz e-mail adresi")
    .required("Zorunlu alan"),
  uyeOlPassword: Yup.string()
    .oneOf([Yup.ref("password"), null])
    .min(6, "En az 6 karakter olmalıdır."),
});

function Register() {
  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      uyeOlName: "",
      uyeOlSurname: "",
      uyeOlEmail: "",
      uyeOlPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const user = await register(values.uyeOlEmail, values.uyeOlPassword);
      if (user) {
        toast({
          title: "Üyelik Oluşturuldu",
          position: 'bottom-right',
          description: "Anasayfaya yönlendiriliyorsunuz.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing="6">
          <Center fontWeight={"semibold"}>Üye Ol</Center>
          <VStack spacing={4} align="flex-start">
            <HStack>
              <FormControl>
                <FormLabel htmlFor="uyeOlName">Ad:</FormLabel>
                <Input
                  id="uyeOlName"
                  name="uyeOlName"
                  type="uyeOlName"
                  onChange={formik.handleChange}
                  value={formik.values.uyeOlName}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="email">Soyad:</FormLabel>
                <Input
                  id="uyeOlSurname"
                  name="uyeOlSurname"
                  type="uyeOlSurname"
                  onChange={formik.handleChange}
                  value={formik.values.uyeOlSurname}
                />
              </FormControl>
            </HStack>

            <FormControl>
              <FormLabel htmlFor="uyeOlEmail">Email:</FormLabel>
              <Input
                id="uyeOlEmail"
                name="uyeOlEmail"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.uyeOlEmail}
              />
            </FormControl>
            <PasswordField
              id="uyeOlPassword"
              value={formik.values.uyeOlPassword}
              onChange={formik.handleChange}
            />
          </VStack>
          <Stack spacing="6">
            <Button
              type="submit"
              variant="primary"
              color={"white"}
              bg={useColorModeValue("gray.100", "gray.700")}
              bgGradient={"linear(to-l, #7928CA, #FF0080)"}
              _hover={{
                bg: useColorModeValue("gray.800", "gray.500"),
                bgGradient: "linear(to-l, #ac28ca, #ff1060)",
              }}
            >
              Üye Ol
            </Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                veya devam et
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Stack>
      </form>
    </>
  );
}

export default Register;
