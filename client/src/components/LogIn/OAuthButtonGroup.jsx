import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import { BsFacebook } from "react-icons/bs";//FcGoogle
import { FcGoogle } from "react-icons/fc";//FcGoogle
const providers = [
  {
    name: "Google",
    icon: <Icon as={FcGoogle} boxSize="5" color={"#3b5998"} />,
  },
   {
    name: "Facebook",
    icon: <Icon as={BsFacebook} boxSize="5" color={"#3b5998"} />,
  },
  /*{
    name: "Twitter",
    icon: <TwitterIcon boxSize="5" />,
  },
  {
    name: "GitHub",
    icon: <GitHubIcon boxSize="5" />,
  },*/
 
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full">
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
