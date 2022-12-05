import {
  IconButton,
  Button,
  Avatar,
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiChevronDown, FiBell } from "react-icons/fi";
import { AiOutlineSetting, AiOutlineHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function UserProfile() {
  return (
    <HStack spacing={{ base: "0", md: "0" }}>
   
      <IconButton
          size="lg"
          variant="ghost"
          aria-label="search data"
          icon={<FiSearch />}
        />
      <a href="/" target="_blank">
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open home page"
          icon={<AiOutlineHome />}
        />
      </a>

   

      <Link>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
      </Link>

      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack spacing="4">
              <Avatar
                size={{ base: "sm", md: "md" }}
                src={
                  "https://instagram.fkya4-1.fna.fbcdn.net/v/t51.2885-19/312907936_1260343187874286_1837847843852548548_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fkya4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=Be9IAuk5FqgAX8R31_c&tn=f7hdyjuMgRNqrPB5&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBf1mgxOSI7ls-fYOjEgAEO0vPrZ4pp5ljuGtSy-Nd3-A&oe=63932046&_nc_sid=1527a3"
                }
              />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="lg">İlyas Bozdemir</Text>
                <Text fontSize="md" color="gray.600">
                  Admin
                </Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList fontSize="lg" bg="white" borderColor="gray.200">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}
