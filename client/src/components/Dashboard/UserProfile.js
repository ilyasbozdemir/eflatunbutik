import {
  IconButton,
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


export default function UserProfile() {
  return (
    <HStack spacing={{ base: "0", md: "0" }}>
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<AiOutlineHome />}
      />
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<AiOutlineSetting />}
      />
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open menu"
        icon={<FiBell />}
      />
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack spacing="4">
              <Avatar
                size="md"
                src={
                  "https://scontent.cdninstagram.com/v/t51.2885-19/312907936_126034318784286_1837847843852548548_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=yPEUjDlbQv8AX8-M36x&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDODQr5PlC8XPhswUTdOnIXOSWbxL9yqmzvpFNfMyeBVA&oe=638B3746&_nc_sid=978cb9"
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
