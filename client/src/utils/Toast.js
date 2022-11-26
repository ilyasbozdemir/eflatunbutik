import React, { useEffect } from "react";

import { useToast } from "@chakra-ui/react";

function Toast({ title, description }) {
  const toast = useToast();
  const [show, setShot] = React.useState(false);
  useEffect(() => {
    toast({
      title: {title},
      position: "bottom-right",
      description: { description },
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  }, [show]);

  return <>{setShot(true)}</>;
}

export default Toast;
