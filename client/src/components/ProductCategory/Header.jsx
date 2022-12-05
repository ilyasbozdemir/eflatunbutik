import { Box, Center, IconButton, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Header = ({ showSidebarButton = true, onShowSidebar }) => {
  return (
    <>
      <>
        <Flex bg="pink.400" p={4} color="white">
          <Box>
            {showSidebarButton && (
              <IconButton
                icon={<ChevronRightIcon w={8} h={8} />}
                colorScheme="blackAlpha"
                variant="outline"
                onClick={onShowSidebar}
              />
            )}
          </Box>
          <Center h="20px">
            <Text fontSize="xl">test</Text>
          </Center>
        </Flex>
      </>
      <>
      
      </>
    </>
  );
};
export default Header;
