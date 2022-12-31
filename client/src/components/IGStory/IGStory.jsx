import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Flex, Image, Stack, Text, Box, Icon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import "./index.css";

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
  var settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Flex justifyContent={"center"}>
      <Box maxW={"85%"} pos={"relative"}>
        <Slider
          slidesToShow={6}
          lazyLoad={true}
          initialSlide={2}
          infinite
          arrows={true}
          {...settings}
        >
          {images.map((image, index) => {
            return (
              <Box as={"span"} key={index} cursor={"pointer"}>
                <ImageItem {...image} />
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Flex>
  );
}

export default React.memo(IGStory);
