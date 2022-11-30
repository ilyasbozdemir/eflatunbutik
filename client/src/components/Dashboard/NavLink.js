import { Link } from "react-router-dom";
import { Flex, Icon, Text } from "@chakra-ui/react";

export default function NavLink({ link, ...rest }) {
  const { label, icon, href } = link;

  return (
    <Link href={href} passHref>
      <Flex
        align="center"
        p="3"
        mx="3"
        borderRadius="md"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "purple.400",
          color: "white",
        }}
        {...rest}
        borderBottom={'1px solid #bccccc'}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        <Text 
        fontFamily={'corbel'} 
        fontSize="1.2rem"
        >{label}</Text>
      </Flex>
    </Link>
  );
}
