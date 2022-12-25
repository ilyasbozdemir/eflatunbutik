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

import { motion } from "framer-motion";

const images = [
  {
    name: "Sana Özel",
    onClickHandled: "",
    to: "/sanaozel/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
  },
  {
    name: "Yeni Gelenler",
    onClickHandled: "",
    to: "/yeni-gelenler/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
  },
  {
    name: "Elbise",
    onClickHandled: "",
    to: "/elbise/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
  },
  {
    name: "Triko",
    onClickHandled: "",
    to: "/triko/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
  },
  {
    name: "Triko",
    onClickHandled: "",
    to: "/triko/",
    src: "https://images.unsplash.com/photo-1519865885898-a54a6f2c7eea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1058&q=80",
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
            borderWidth: "4px",
            borderStyle: "solid",
            background: `radikal-gradient(45deg, purple, orange) border-box,
            radikal-gradient(45deg, purple, orange) border-box`,
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

  React.useLayoutEffect(() => {
    console.log(
      "scrollWidth: " +
        carousel.current.scrollWidth +
        " offsetWidth :" +
        carousel.current.offsetWidth
    );
    console.log(
      "item.scrollWidth: " +
        item.current.scrollWidth +
        " item.offsetWidth :" +
        item.current.offsetWidth
    );
    setWidth(
      carousel.current.scrollWidth -
        carousel.current.offsetWidth +
        item.current.scrollWidth
    );
  }, []);

  return (
    <>
      <Box pos={"relative"}>
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

        <></>
      </Box>
    </>
  );
}

export default IGStory;
