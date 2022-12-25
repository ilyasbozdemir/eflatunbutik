import React, { useState } from "react";
import Slider from "react-slick";
import { Flex, Image, Stack, Text, Box, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./index.module.css";

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
];
const ImageItem = (props) => {
  const { src, to, name } = props;
  return (
    <Link to={to}>
      <Stack
        display={"flex !important"}
        direction={"column"}
        w={110}
        alignItems={"center"}
        overflow={"auto"}
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
 
  return (
    <>
      
    </>
  );
}

export default IGStory;
