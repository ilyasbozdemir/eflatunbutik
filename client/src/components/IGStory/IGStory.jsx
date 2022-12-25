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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./index.module.css";

import useWindowDimensions from "../../../src/hooks/useWindowDimensions";

import { motion } from "framer-motion";

const images = [
  {
    name: "Yeni Gelenler",
    onClickHandled: "",
    to: "/yeni-gelenler/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Elbise",
    onClickHandled: "",
    to: "/elbise/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Triko",
    onClickHandled: "",
    to: "/triko/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Üst Giyim",
    onClickHandled: "",
    to: "/ust-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Alt Giyim",
    onClickHandled: "",
    to: "/alt-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Dış Giyim",
    onClickHandled: "",
    to: "/dis-giyim/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Outlet",
    onClickHandled: "",
    to: "/outlet/",
    src: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];
const ImageItem = (props) => {
  const { src, to, name, ...rest } = props;
  return (
    <Link to={to}>
      <Stack
        display={"flex !important"}
        direction={"column"}
        w={110}
        alignItems={"center"}
        overflow={"auto"}
        {...rest}
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
    </Link>
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

  return (
    <motion.div ref={carousel} className={styles.carousel}>
      <motion.div
        drag={"x"}
        dragConstraints={{ left: -width, right: 0 }}
        className={styles.inner_carousel}
      >
        {images.map((image, index) => {
          return (
            <motion.div ref={item} className={styles.item}>
              <ImageItem key={index} {...image} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default IGStory;
