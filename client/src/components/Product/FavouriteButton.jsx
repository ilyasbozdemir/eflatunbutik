import { Icon, IconButton, LightMode } from "@chakra-ui/react";
import * as React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDisclosure } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
export function FavouriteButton(props) {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const toast = useToast();

  const [icon, setIcon] = React.useState(
    <Icon as={AiOutlineHeart} transition="all 0.15s ease" />
  );
  const [title, setTitle] = React.useState("Ürün favorilere eklendi.");
  const [description, setDescription] = React.useState("");

  const clickHandled = () => {
    onToggle();

    if (!isOpen) {
      setIcon(
        <Icon as={AiFillHeart} color={"red.500"} transition="all 0.15s ease" />
      );
      setTitle("Ürün favorilerden kaldırıldı.");
    } else {
      setIcon(<Icon as={AiOutlineHeart} transition="all 0.15s ease" />);
      setTitle("Ürün favorilere eklendi.");
    }
    toast({
      title: title,
      description: description,
      status: "info",
      position: "top-right",
      duration: 500,
      isClosable: true,
    });
  };

  return (
    <>
      <LightMode>
        <IconButton
          isRound
          bg="white"
          color="gray.900"
          size="sm"
          _hover={{
            transform: "scale(1.1)",
          }}
          sx={{
            ":hover > svg": {
              transform: "scale(1.1)",
            },
          }}
          transition="all 0.15s ease"
          icon={icon}
          boxShadow="base"
          {...props}
          onClick={clickHandled}
        />
      </LightMode>
    </>
  );
}
