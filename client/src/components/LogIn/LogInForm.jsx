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
import { useFormik } from "formik";
import LoginButton from "./LoginButton";

import { login } from "../../services/auth";
import { FcApproval } from "react-icons/fc";
import { MdError } from "react-icons/md";

import * as Yup from "yup";

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

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  formik = useFormik({
    initialValues: {
      girisYapEmail: "",
      girisYapPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      this.props.setLoginState(true);

      const user = await login(values.uyeOlEmail, values.uyeOlPassword);
      if (user) {
        alert("tmm");
      }
    },
  });
  render() {
    return (
      <>
        <form onSubmit={this.formik.handleSubmit}>
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
                    onChange={this.formik.handleChange}
                    value={this.formik.values.girisYapEmail}
                    onBlur={this.formik.handleBlur}
                    required
                  />
                  {this.formik.errors.girisYapEmail &&
                  this.formik.touched.girisYapEmail ? (
                    <ErrorMessage>
                      {this.formik.errors.girisYapEmail}
                    </ErrorMessage>
                  ) : (
                    <SuccessMessage></SuccessMessage>
                  )}
                </FormControl>

                <PasswordField
                  id="girisYapPassword"
                  value={this.formik.values.girisYapPassword}
                  onChange={this.formik.handleChange}
                  onBlur={this.formik.handleBlur}
                  required
                />
                {this.formik.errors.girisYapPassword &&
                this.formik.touched.girisYapPassword ? (
                  <ErrorMessage>
                    {this.formik.errors.girisYapPassword}
                  </ErrorMessage>
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
}


export default LogInForm;
