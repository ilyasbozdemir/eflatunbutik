import React from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { useFormik } from "formik";
import { register } from "../../services/auth";
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
  Icon,
  Flex,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { FcApproval } from "react-icons/fc";
import { MdError } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Message = ({ children, icon, color }) => {
  return (
    <Flex textAlign={"center"} justifyItems={"center"}>
      <Text as="small">
        <Icon color={color} as={icon} />
        {children ? children : ""}
      </Text>
    </Flex>
  );
};

const ErrorMessage = ({ children }) => {
  return <Message icon={MdError} color={"red"} children={children} />;
  //return <Message icon={MdError} color={"red"} children={children}>{children}</Message>;
};

const InfoMessage = ({ children }) => {
  return (
    <Message
      icon={AiOutlineInfoCircle}
      color={"orange.500"}
      children={children}
    />
  );
};

const SuccessMessage = ({ children }) => {
  return <Message icon={FcApproval} color={"green.500"} children={children} />;
};

const RegisterSchema = Yup.object().shape({
  uyeOlName: Yup.string().required("Zorunlu alan"),
  uyeOlSurname: Yup.string().required("Zorunlu alan"),
  uyeOlEmail: Yup.string()
    .email("Geçersiz e-mail adresi")
    .required("Zorunlu alan"),
  uyeOlPassword: Yup.string().min(6, "En az 6 karakter olmalıdır."),
});

function RegisterForm() {
  const toast = useToast();

  //Can e-mail address be used?
  const [canEmailAddressBeUsed, setCanEmailAddressBeUsed] =
    React.useState(true);

 

  //auth/email-already-in-use

  const formik = useFormik({
    initialValues: {
      uyeOlName: "",
      uyeOlSurname: "",
      uyeOlEmail: "",
      uyeOlPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      //alert(JSON.stringify(values, null, 2));

      const user = await register(
        values.uyeOlEmail,
        values.uyeOlPassword,
        values.uyeOlName,
        values.uyeOlSurname
      );

      console.log(user);

      values.uyeOlName = "";
      values.uyeOlSurname = "";
      values.uyeOlEmail = "";
      values.uyeOlPassword = "";

      if (user) {
        setCurrentUser(user);
        toast({
          title: "Bilgi",
          position: "bottom-right",
          description: "İşlem başarılı",
          status: "success",
          duration: 1500,
          isClosable: true,
        });
      }
    },
  });
  const [currentUser, setCurrentUser] = React.useState(false);

  const [error, setError] = React.useState(false);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing="6">
          <Center fontWeight={"semibold"}>Üye Ol</Center>
          <VStack spacing={4} align="flex-start">
            <HStack>
              <FormControl isRequired>
                <FormLabel htmlFor="uyeOlName">Ad:</FormLabel>
                <Input
                  id="uyeOlName"
                  name="uyeOlName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.uyeOlName}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.uyeOlName && formik.touched.uyeOlName ? (
                  <ErrorMessage>{formik.errors.uyeOlName}</ErrorMessage>
                ) : (
                  <SuccessMessage></SuccessMessage>
                )}
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="email">Soyad:</FormLabel>
                <Input
                  id="uyeOlSurname"
                  name="uyeOlSurname"
                  type="uyeOlSurname"
                  onChange={formik.handleChange}
                  value={formik.values.uyeOlSurname}
                  onBlur={formik.handleBlur}
                  required
                />

                {formik.errors.uyeOlSurname && formik.touched.uyeOlSurname ? (
                  <ErrorMessage>{formik.errors.uyeOlSurname}</ErrorMessage>
                ) : (
                  <SuccessMessage></SuccessMessage>
                )}
              </FormControl>
            </HStack>

            <FormControl isRequired>
              <FormLabel htmlFor="uyeOlEmail">Email:</FormLabel>
              <Input
                id="uyeOlEmail"
                name="uyeOlEmail"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.uyeOlEmail}
                onBlur={formik.handleBlur}
                required
              />
              {formik.errors.uyeOlEmail && formik.touched.uyeOlEmail ? (
                <ErrorMessage>{formik.errors.uyeOlEmail}</ErrorMessage>
              ) : (
                <Text>
                 test
                </Text>
              )}
            </FormControl>

            <PasswordField
              id="uyeOlPassword"
              value={formik.values.uyeOlPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isRequired
              required
            />
            {formik.errors.uyeOlPassword && formik.touched.uyeOlPassword ? (
              <ErrorMessage>{formik.errors.uyeOlPassword}</ErrorMessage>
            ) : (
              <SuccessMessage></SuccessMessage>
            )}
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

export default React.memo(RegisterForm);
