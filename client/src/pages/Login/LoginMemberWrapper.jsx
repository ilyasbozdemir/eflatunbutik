import {
  Box,
  Heading,
  Stack,
  useBreakpointValue as UseBreakpointValue,
  useColorModeValue as UseColorModeValue,
  Center,
} from "@chakra-ui/react";
import * as React from "react";
import Logo from "../../components/Logo";
function LoginMemberWrapper({ children }) {
  return (
    <>
      <Stack spacing="8">
        <Stack spacing="6">
          <Center>
            <Logo />
          </Center>
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            <Heading
              size={UseBreakpointValue({
                base: "xs",
                md: "sm",
              })}
            >
              EflatunButik'e giriş yap veya hesap oluştur, indirimleri kaçırma!
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={UseColorModeValue({
            base: "transparent",
            sm: "bg-surface",
          })}
          boxShadow={{
            base: "none",
            sm: UseColorModeValue("md", "md-dark"),
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          {children}
        </Box>
      </Stack>
    </>
  );
}

export default LoginMemberWrapper;
