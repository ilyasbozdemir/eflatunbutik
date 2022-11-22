import { Link } from "react-router-dom";
import {
  Icon,
  Text,
  useDisclosure as UseDisclosure,
  Wrap,
  WrapItem,
  Flex,
  Button,
  Box,
  VStack,
  Collapse,
  HStack,
  Spacer,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export default function NavLink({ link, ...rest }) {
  const { isOpen, onOpen, onClose, onToggle } = UseDisclosure();

  const { label, href, icon, childrens } = link;

  return (
    <>
      <Link to={href}>
        <Flex
          align="center"
          p="3"
          mx="3"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          role="group"
          _hover={{
            color: "white",
            bgGradient: "linear(to-l, #7928CA, #FF0080)",
          }}
          cursor="pointer"
          {...rest}
        >
          <Flex justifyContent={"space-between"}>
            {icon && (
              <Icon
                mr="4"
                fontSize="25"
                _groupHover={{
                  color: "white",
                }}
                as={icon}
              />
            )}

            {label}
            {childrens.length !== 0 ? <Icon as={ChevronDownIcon}/> : ""}
          </Flex>
        </Flex>
      </Link>

      <Collapse in={isOpen} animateOpacity>
        {childrens.map((link, i) => (
          <Link to={link.href}>
            <Box
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              cursor="pointer"
              _hover={{
                color: "white",
                bgGradient: "linear(to-l, #7928CA, #FF0080)",
              }}
              mx="10"
              p="3"
              fontSize="15"
            >
              <HStack>
                <Flex justifyContent={"space-between"}>
                  {icon && (
                    <Icon
                      mr="4"
                      fontSize="25"
                      _groupHover={{
                        color: "white",
                      }}
                      as={icon}
                    />
                  )}
                  {link.label}
                </Flex>
              </HStack>
            </Box>
          </Link>
        ))}
      </Collapse>
    </>
  );
}
