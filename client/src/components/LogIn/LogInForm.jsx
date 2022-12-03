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
  Checkbox,
} from "@chakra-ui/react";
import * as React from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

import LoginButton from "./LoginButton";

import { login } from "../../services/auth";
import { FcApproval } from "react-icons/fc";
import { MdError } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import { selectLoginState } from "../../store/selectors";
import { setLoginState } from "../../store/actions";

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

const SuccessMessage = ({ children }) => {
  return <Message icon={FcApproval} color={"green.500"} children={children} />;
};

const loginSchema = Yup.object().shape({
  girisYapEmail: Yup.string()
    .email("Geçersiz e-mail adresi")
    .required("Zorunlu alan"),
  girisYapPassword: Yup.string().min(6, "En az 6 karakter olmalıdır."),
});

function LogInForm() {
  const formik = useFormik({
    initialValues: {
      girisYapEmail: "",
      girisYapPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      const user = await login(values.uyeOlEmail, values.uyeOlPassword);
      if (user) {
      }
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing="6">
          <Stack spacing="5">
            <Center fontWeight={"semibold"}>Giriş Yap</Center>

            <VStack spacing={4} align="flex-start">
              <FormControl isRequired>
                <FormLabel htmlFor="girisYapEmail">Email:</FormLabel>
                <Input
                  id="girisYapEmail"
                  name="girisYapEmail"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.girisYapEmail}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.errors.girisYapEmail && formik.touched.girisYapEmail ? (
                  <ErrorMessage>{formik.errors.girisYapEmail}</ErrorMessage>
                ) : (
                  <SuccessMessage></SuccessMessage>
                )}
              </FormControl>

              <PasswordField
                id="girisYapPassword"
                value={formik.values.girisYapPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              {formik.errors.girisYapPassword &&
              formik.touched.girisYapPassword ? (
                <ErrorMessage>{formik.errors.girisYapPassword}</ErrorMessage>
              ) : (
                <SuccessMessage></SuccessMessage>
              )}
            </VStack>
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultChecked>Beni Hatırla</Checkbox>
            <Button variant="link" colorScheme="blue" size="sm">
              Şifremi Unuttum
            </Button>
          </HStack>
          <Stack spacing="6">
            <LoginButton />
            <Button onClick={() => setLoginState(true)}>true</Button>
            <Button onClick={() => setLoginState(false)}>false</Button>
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

const mapStateToProps = createStructuredSelector({
  loginState: selectLoginState(),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setLoginState,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
