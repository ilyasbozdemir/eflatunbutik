import React from "react";
import Logo from "../../components/Logo";
import { Link as ReactLink } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
  Link,
  Box,
  Spacer,
} from "@chakra-ui/react";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

import iyzicoLogo from "../../assests/iyzico_ile_ode_colored.svg";

function index() {
  return (
    <Container
      as="footer"
      role="contentinfo"
      maxW={"container.lg"}
      bg={"black.300"}
      color={"black"}
      marginTop={10}
    >
      <Divider marginBottom={3} />
      <Stack
        spacing="8"
        direction={{
          base: "column",
          md: "row",
        }}
        justify="space-between"
        py={{
          base: "8",
          md: "12",
        }}
      >
        <Stack align="center" justifyContent={"center"} ml={10} mr={10}>
          <ReactLink to="/">
            <Logo />
          </ReactLink>

          <Text color="muted.200">En Trend Kadın Giyim</Text>

          <ButtonGroup variant="ghost">
            <Link href="/" target="_blank">
              <IconButton
                aria-label="Facebook"
                icon={<FaFacebook fontSize="1.25rem" />}
                _hover={{ bg: "blue.500", color: " white" }}
              />
            </Link>
            <Link
              href="https://www.instagram.com/eflatun.butik/"
              target="_blank"
            >
              <IconButton
                as="button"
                aria-label="Instagram"
                icon={<FaInstagram fontSize="1.25rem" />}
                _hover={{ bg: "pink.500", color: " white" }}
              />
            </Link>
          </ButtonGroup>

          <img
            src={iyzicoLogo}
            alt="iyzico ile öde logo"
            height={30}
            width={110}
          />
        </Stack>

        <Stack
          direction={{
            base: "column-reverse",
            md: "column",
            lg: "row",
          }}
          spacing={{
            base: "12",
            md: "8",
          }}
        >
          <Stack direction="row" spacing="2">
            <Stack spacing="2" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold">
                Hesabım
              </Text>
              <Stack spacing="2" shouldWrapChildren>
                <Button variant="link" color="blue.400">
                  Hesabım
                </Button>
                <Button variant="link" color="blue.400">
                  Siparişlerim
                </Button>
                <Button variant="link" color="blue.400">
                  Alışveriş Sepetim
                </Button>
                <Button variant="link" color="blue.400">
                  Favorilerim
                </Button>
                <Button variant="link" color="blue.400">
                  Canlı Destek
                </Button>
              </Stack>
            </Stack>
            <Stack spacing="2" minW="36" flex="1">
              <Text fontSize="sm" fontWeight="semibold">
                Sözleşmeler
              </Text>
              <Stack spacing="2" shouldWrapChildren>
                <Button variant="link" color="blue.400">
                  Mesafeli Satış Sözleşmesi
                </Button>
                <Button variant="link" color="blue.400">
                  Üyelik Sözleşmesi
                </Button>
                <Button variant="link" color="blue.400">
                  Çerez Politikası
                </Button>
                <Button variant="link" color="blue.400">
                  Gizlilik Sözleşmesi
                </Button>
                <Button variant="link" color="blue.400">
                  Kullanım Koşulları
                </Button>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold">
              Bizden Haberler
            </Text>

            <Text as="div">
              Kampanya ve Fırsatlarımızdan İlk Siz Haberdar Olun!
            </Text>

            <Stack
              spacing="4"
              direction={{
                base: "column",
                sm: "row",
              }}
              maxW={{
                lg: "360px",
              }}
            >
              <Input
                placeholder="E-mail adresini giriniz"
                type="email"
                required
              />
              <Button color="blue.400" type="submit" flexShrink={0}>
                Abone ol
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        justify="center"
        direction={{
          base: "row",
          md: "row",
        }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear() + " "}
          Eflatun Butik. Tüm Hakları Saklıdır..
        </Text>
      </Stack>

      <Divider orientation="horizontal" />
      <Divider orientation="horizontal" />
      <Stack
        justify="flex-end"
        direction={{
          base: "column",
          md: "row",
        }}
        align="center"
      >
        <Text textAlign="center" fontSize="sm" color="subtle">
          Bu websitesi İlyas Bozdemir tarafından geliştirilmiştir.
        </Text>
        <ButtonGroup>
          <Link
            href="https://github.com/ilyasBozdemir/"
            target={"_blank"}
            isExternal
          >
            <IconButton
              as="i"
              aria-label="Github"
              icon={<FaGithub fontSize="1.25rem" />}
              _hover={{ bg: "black", color: "white" }}
              bg={"transparent"}
            />
          </Link>
          <Link href="https://www.instagram.com/bozdemirilyas1/" isExternal>
            <IconButton
              as="i"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
              _hover={{ bg: "pink.500", color: " white" }}
              bg={"transparent"}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ilyas-bozdemir-093087207/"
            isExternal
          >
            <IconButton
              as="i"
              aria-label="Linkedin"
              icon={<FaLinkedin fontSize="1.25rem" />}
              _hover={{ bg: "blue.500", color: " white" }}
              bg={"transparent"}
            />
          </Link>
        </ButtonGroup>
        <Box height={50} display={{ base: "block", md: "none" }}></Box>
      </Stack>
    </Container>
  );
}

export default index;
