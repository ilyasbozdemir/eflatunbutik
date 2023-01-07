import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Image,
  Icon,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

import { FavouriteButton } from "./Product/FavouriteButton";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
function Carousel(props) {
  const [slider, setSlider] = React.useState(null);
  const [show, setShow] = React.useState(false);
  const [grab, setGrab] = React.useState(false);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "50px" });
  const sizeW = useBreakpointValue({ base: 300, md: 400 });

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      position={"relative"}
      overflow={"hidden"}
      w={sizeW}
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      cursor={grab === true ? "grab" : "grabbing"}
      onMouseDown={() => {
        setGrab(false);
      }}
      onMouseUp={() => {
        setGrab(true);
      }}
    >
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {show === true ? (
        <>
          {props.carousels.length > 1 ? (
            <>
              <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
                icon={
                  <Icon
                    as={BsFillArrowLeftCircleFill}
                    fontSize={40}
                    color={"white"}
                  />
                }
                _hover={{ bg: "transparent", opacity: "1" }}
                opacity={".7"}
              />

              <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
                icon={
                  <Icon
                    as={BsFillArrowRightCircleFill}
                    fontSize={40}
                    color={"white"}
                  />
                }
                _hover={{ bg: "transparent", opacity: "1" }}
                opacity={".7"}
              />
            </>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
      {isMobile === true ? (
        <FavouriteButton
          position="absolute"
          top="2"
          right="2"
          aria-label={`Add ${props.carousels[0].title} to your favourites`}
          zIndex={2}
        />
      ) : (
        ""
      )}

      {/* Slider */}

      <>
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {props.carousels.map((carousel, index) => (
            <div key={carousel.id}>
              <Image
                src={carousel.src}
                alt={carousel.alt}
                rounded={10}
                draggable={false}
              />
            </div>
          ))}
        </Slider>
      </>
    </Box>
  );
}

export default Carousel;
