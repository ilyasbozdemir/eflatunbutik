import {
  Button,
  Checkbox,
  Divider,
  useToast,
  Stack,
  Center,
  HStack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { useFormik } from "formik";
import LoginButton from "./LoginButton";

import { login } from "../../firebase/auth";

import * as Yup from "yup";

function LogInForm() {
  const toast = useToast();

  const validationSchema = Yup.object({
    girisYapEmail: Yup.string()
      .email("Geçersiz e-mail adresi")
      .required("Zorunlu alan"),
    girisYapPassword: Yup.string()
      .oneOf([Yup.ref("password"), null])
      .min(6, "En az 6 karakter olmalıdır."),
  });
  const formik = useFormik({
    initialValues: {
      girisYapEmail: "",
      girisYapPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const user = await login(values.uyeOlEmail, values.uyeOlPassword);
      if (user) {
        toast({
          title: "Üyelik Oluşturuldu",
          position: "bottom-right",
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
          <Stack spacing="5">
            <Center fontWeight={"semibold"}>Giriş Yap</Center>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Beni Hatırla</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Şifremi Unuttum
            </Button>
          </HStack>
          <Stack spacing="6">
            <LoginButton />

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

export default LogInForm;
