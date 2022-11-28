import { Icon, Button, Box } from "@chakra-ui/react";
import { BsChevronCompactUp } from "react-icons/bs";

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
    if (windowPosition >= 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [windowPosition]);

  return (
    <>
      {show && (
        <Box>
          <Button
            onClick={scrollToTop}
            borderRadius={"25px"}
            color={"white"}
            bgGradient="linear(to-l, #ac28ca, #ff1060)"
            _hover={{ bgGradient: "linear(to-r, #ac28ca, #ff1060)" }}
            position={"fixed"}
            bottom={"80px"}
            right={"15px"}
            zIndex={100}
          >
            <Icon as={BsChevronCompactUp} m={3} fontSize={20} />
          </Button>
        </Box>
      )}
    </>
  );
}

export default ScrollToTop;
