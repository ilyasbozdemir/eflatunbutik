import { Icon, Button, Box } from "@chakra-ui/react";
import { BsChevronUp } from "react-icons/bs";

import React, { useState, useLayoutEffect, useEffect } from "react";

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

function useWindowPosition() {
  const [scrollPosition, setPosition] = useState(0);

  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
}

function ScrollToTop() {
  let windowPosition = useWindowPosition();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (windowPosition >= 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [windowPosition]);

  return (
    <>
      {show && (
        <Box zIndex={1001}>
          <Button
            onClick={scrollToTop}
            borderRadius={"25px 25px 25px 25px"}
            color={"white"}
            bgGradient="linear(to-l, #ac28ca, #ff1060)"
            _hover={{ bgGradient: "linear(to-r, #ac28ca, #ff1060)" }}
            position={"fixed"}
            bottom={{ base: "80px", lg: "40px" }}
            right={"15px"}
            zIndex={500}
            boxShadow={
              " rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"
            }
          >
            <Icon as={BsChevronUp} m={3} fontSize={20} />
          </Button>
        </Box>
      )}
    </>
  );
}

export default ScrollToTop;
