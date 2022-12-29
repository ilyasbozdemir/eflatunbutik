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
import { Link, useNavigate } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./index.module.css";

import useWindowDimensions from "../../../src/hooks/useWindowDimensions";

import { motion } from "framer-motion";

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

  let [isSwiping, setIsSwiping] = useState(0);
  let onDrag = (event, info) => setIsSwiping(info.offset.x > 10);

  return (
    <>
      <motion.div ref={carousel} className={styles.carousel} width={"100%"}>
        <motion.div
          drag={"x"}
          animate={isSwiping ? "swiping" : "static"}
          onDrag={onDrag}
          dragConstraints={{ left: -width, right: 0 }}
          dragDirectionLock
          className={styles.inner_carousel}
        >
          {images.map((image, index) => {
            return (
              <motion.div key={index} ref={item} className={styles.item}>
                <ImageItem {...image} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}

export default React.memo(IGStory);
