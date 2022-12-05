import { Box, Center, IconButton, Text, Flex } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const ProductContent = (props) => {
  const { showSidebarButton = true, onShowSidebar, children } = props;
  return (
    <>
      <>
        <Flex bg="pink.400" color="white">
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
            <Text fontSize="xl">{children}</Text>
          </Center>
        </Flex>
      </>
    </>
  );
};
export default ProductContent;
