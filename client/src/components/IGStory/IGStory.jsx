import React, { useState } from "react";
import Slider from "react-slick";
import {
  Flex,
  Image,
  Stack,
  Text,
  Box,
  Icon,
  background,
  Button,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./index.module.css";

import useWindowDimensions from "../../../src/hooks/useWindowDimensions";

import {
  motion,
  useDragControls,
  useMotionValue,
  useAnimation,
} from "framer-motion";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const images = [
  {
    name: "Yeni Gelenler",
    to: "/yeni-gelenler/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Elbise",
    to: "/elbise/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Triko",

    to: "/triko/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Üst Giyim",

    to: "/ust-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Alt Giyim",

    to: "/alt-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Dış Giyim",

    to: "/dis-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Outlet",

    to: "/outlet/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const ImageItem = (props) => {
  const { src, to, name, ...rest } = props;
  const navigate = useNavigate();

  return (
    <>
      <Stack
        display={"flex !important"}
        direction={"column"}
        w={110}
        alignItems={"center"}
        overflow={"auto"}
        {...rest}
        onClick={() => {
          navigate(to);
        }}
      >
        <Image
          css={{
            borderRadius: "50px",
          }}
          borderRadius="full"
          boxSize="50px"
          src={src}
          alt={name}
          objectFit="cover"
          draggable={false}
        />
        <Text as={"span"} size={"sm"}>
          {name}
        </Text>
      </Stack>
    </>
  );
};

function IGStory() {
  const [width, setWidth] = React.useState(0);
  const carousel = React.useRef();
  const item = React.useRef();
  const WindowDimensions = useWindowDimensions();
  React.useLayoutEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [WindowDimensions.width]);
  const ref = React.useRef();

  const MotionBox = motion(Box);
  const [x, setX] = React.useState(0);
  React.useEffect(() => {}, [x]);

  //  dragConstraints={{ left: -width, right: 0 }}
  const forwardHandled = () => {
    if (x < 0) {
      setX(x + item.current.scrollWidth);
    }
  };

  //const back = -itemLength + item.current.scrollWidth < x;

  const backHandled = () => {
    const itemLength = item.current.scrollWidth * images.length;
    if (-itemLength + item.current.scrollWidth < x) {
      setX(x - item.current.scrollWidth);
    }
  };

  //alert(item.current.scrollWidth * images.length);

  console.log(width);

  return (
    <Box pos={"relative"}>
      <motion.div ref={carousel} className={styles.carousel} width={"100%"}>
        <motion.div
          initial={30}
          drag={"x"}
          dragConstraints={{ left: -width, right: 0 }}
          className={styles.inner_carousel}
          onDrag={(event, info) => {
            console.log(info.point.x + " xy " + info.point.y);
          }}
          animate={{ x: x }}
        >
          {images.map((image, index) => {
            return (
              <motion.div key={index} ref={item} className={styles.item}>
                <ImageItem {...image} />
              </motion.div>
            );
          })}
        </motion.div>

        <Icon
          pos={"absolute"}
          left={5}
          top={"35%"}
          as={BsChevronLeft}
          bg={"white"}
          rounded={"full"}
          w={5}
          h={5}
          cursor={"pointer"}
          onClick={backHandled}
        />

        {x < 0 ? (
          <Icon
            pos={"absolute"}
            right={5}
            top={"35%"}
            as={BsChevronRight}
            bg={"white"}
            rounded={"full"}
            w={5}
            h={5}
            cursor={"pointer"}
            onClick={forwardHandled}
          />
        ) : (
          ""
        )}
      </motion.div>
    </Box>
  );
}

export default React.memo(IGStory);
