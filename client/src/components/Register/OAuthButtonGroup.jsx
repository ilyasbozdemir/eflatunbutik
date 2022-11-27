import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { googleWithRegister, facebookWithRegister } from "../../services/auth";

const providers = [
  {
    name: "Google",
    icon: <Icon as={FcGoogle} boxSize="5" color={"#3b5998"} />,
    handled: googleWithRegister,
  },
  {
    name: "Facebook",
    icon: <Icon as={BsFacebook} boxSize="5" color={"#3b5998"} />,
    handled: facebookWithRegister,
  },
];

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon, handled }) => (
      <Button key={name} width="full" onClick={handled}>
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
);
