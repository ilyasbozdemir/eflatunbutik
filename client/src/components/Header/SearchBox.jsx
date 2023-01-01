import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { encode, decode } from "html-entities";
import { useSearchParams } from "react-router-dom";
import {
  Stack,
  Box,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Icon,
  Flex,
  Text,
  Badge,
} from "@chakra-ui/react";
import styles from "./index.module.css";

import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { Highlight } from "@chakra-ui/react";
function SearchBox(props) {
  const [searchHistory, setSearchHistory] = React.useState([
    { id: 1, name: "Elbise", to: "/elbise/" },
    { id: 2, name: "trençkot", to: "/trenckot/" },
    { id: 3, name: "kaban", to: "/kaban/" },
  ]);

  const data = [
    {
      id: 1,
      title: "Yeni Gelenler",
      type: "Kategori",
      to: "/yeni-gelenler/",
    },
    {
      id: 2,
      title: "Elbise",
      type: "Kategori",
      to: "/elbise/",
    },
    {
      id: 3,
      title: "Triko",
      type: "Kategori",
      to: "/triko/",
    },
    {
      id: 4,
      title: "İç Giyim",
      type: "Kategori",
      to: "/ic-giyim/",
    },
    {
      id: 5,
      title: "Üst Giyim",
      type: "Kategori",
      to: "/ust-giyim/",
    },
    {
      id: 6,
      title: "Sweatshirt",
      type: "Kategori",
      to: "/sweatshirt/",
    },
    {
      id: 7,
      title: "Tişört",
      type: "Kategori",
      to: "/tisort/",
    },
    {
      id: 8,
      title: "Tunik",
      type: "Kategori",
      to: "/tunik/",
    },
    {
      id: 9,
      title: "Tunik",
      type: "Kategori",
      to: "/tunik/",
    },
    {
      id: 10,
      title: "Bluz",
      type: "Kategori",
      to: "/bluz/",
    },
    {
      id: 11,
      title: "Alt Giyim",
      type: "Kategori",
      to: "/alt-giyim/",
    },
    {
      id: 12,
      title: "Etek",
      type: "Kategori",
      to: "/etek/",
    },
    {
      id: 13,
      title: "Pantolon",
      type: "Kategori",
      to: "/pantolon/",
    },
    {
      id: 14,
      title: "Pijama Takımı",
      type: "Kategori",
      to: "/pijama-takimi/",
    },
    {
      id: 15,
      title: "Etek Takımı",
      type: "Kategori",
      to: "/etek-takimi/",
    },
    {
      id: 16,
      title: "Dış Giyim",
      type: "Kategori",
      to: "/dis-giyim/",
    },
    {
      id: 17,
      title: "Yelek",
      type: "Kategori",
      to: "/yelek/",
    },
    {
      id: 18,
      title: "Trençkot",
      type: "Kategori",
      to: "/trenckot/",
    },
    {
      id: 19,
      title: "Kap",
      type: "Kategori",
      to: "/kap/",
    },
    {
      id: 20,
      title: "Kaban",
      type: "Kategori",
      to: "/kaban/",
    },
    {
      id: 21,
      title: "Yağmurluk",
      type: "Kategori",
      to: "/yagmurluk/",
    },
    {
      id: 22,
      title: "Yağmurluk",
      type: "Kategori",
      to: "/yagmurluk/",
    },
    {
      id: 23,
      title: "Kazak",
      type: "Kategori",
      to: "/kazak/",
    },
    {
      id: 24,
      title: "Takım",
      type: "Kategori",
      to: "/takim/",
    },
    {
      id: 25,
      title: "Hırka",
      type: "Kategori",
      to: "/hirka/",
    },
    {
      id: 26,
      title: "Süveter",
      type: "Kategori",
      to: "/suveter/",
    },
    {
      id: 27,
      title: "Outlet",
      type: "Kategori",
      to: "/outlet/",
    },
    {
      id: 28,
      title: "Kombin",
      type: "Kategori",
      to: "/kombin/",
    },
    {
      id: 29,
      title: "Etekli Kombin",
      type: "Kategori",
      to: "/etekli-kombin/",
    },
    {
      id: 30,
      title: "Pantolonlu Kombin",
      type: "Kategori",
      to: "/pantolonlu-kombin/",
    },
    /*,
    {
      id: 2,
      title: "Tesettür Elbise",
      type: "Ürün",
    },*/
  ];

  const [result, setResult] = React.useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [closeButtonShow, setCloseButtonShow] = React.useState(false);

  const [inputValue, setInputValue] = React.useState(
    decode(searchParams.get("q"))
  );
  const isTyping = inputValue.replace(/\s+/, "").length > 0;

  const searchRef = React.useRef();

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setInputValue("");
    }
  };

  React.useEffect(() => {
    const filteredResult = data.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setResult(filteredResult.length > 0 ? filteredResult : false);
  }, [inputValue]);

  React.useEffect(() => {
    if (inputValue.length > 0) {
      setCloseButtonShow(true);
    } else {
      setCloseButtonShow(false);
    }
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") navigate(`/ara?q=${encode(inputValue)}`);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
    if (e.keyCode === 38) {
      console.log("yukarı");
    }
    if (e.keyCode === 40) {
      console.log("aşağı");
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form autocomplete="off" onSubmit={handleSubmit}>
        <Stack
          ref={searchRef}
          className={styles.search}
          {...props}
          w={{ base: "14.5em", md: "30em" }}
          maxWidth={{ base: "30em" }}
        >
          <Flex
            direction={"row"}
            border={isTyping ? "1px solid #A020F0" : "1px solid"}
            borderRadius={isTyping ? "16px 16px 0 0" : "16px"}
          >
            <InputGroup>
              <Input
                id="search-input"
                variant={"unstyled"}
                placeholder="Ürün,kategori ara"
                borderRadius="16px 0 0 16px"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                w={{ base: "350px" }}
                pl={3}
                _placeholder={{ color: "gray.500" }}
              />
              {closeButtonShow === true ? (
                <InputRightElement
                  children={
                    <Icon
                      onClick={() => setInputValue("")}
                      bg="transparent"
                      _hover={{
                        bg: "transparent",
                        cursor: "pointer",
                        color: "red.500",
                      }}
                      as={AiOutlineClose}
                    />
                  }
                />
              ) : (
                ""
              )}
            </InputGroup>
            <IconButton
              ml={1}
              type="submit"
              bg="#A020F0"
              color="white"
              _hover={{ color: "gray.200" }}
              borderRadius={isTyping ? "0 16px 0 0" : "0 16px 16px 0"}
              icon={<FiSearch />}
            />
          </Flex>

          {isTyping && (
            <Box
              border={isTyping ? "1px solid #A020F0" : null}
              className={styles.search_result}
            >
              {result === false ? (
                <Box pl={3} className={styles.result_not_found}>
                  "<Text as="b">{inputValue}</Text>" ile ilgili bir ürün veya
                  kategori bulamadık!
                </Box>
              ) : (
                result.map((item) => (
                  <Link to={item.to}>
                    <Box
                      key={item.id}
                      className={styles.search_result_item}
                      pt={3}
                      pb={1}
                      pl={3}
                      pr={3}
                    >
                      <Text fontWeight="normal">
                        <Highlight
                          query={inputValue}
                          styles={{ fontWeight: "semibold" }}
                        >
                          {item.title}
                        </Highlight>
                      </Text>

                      {item.type === "Kategori" ? (
                        <Box>
                          <Badge variant="outline" colorScheme="pink">
                            {item.type}
                          </Badge>
                        </Box>
                      ) : (
                        ""
                      )}
                    </Box>{" "}
                  </Link>
                ))
              )}
            </Box>
          )}
        </Stack>
      </form>
    </>
  );
}

export default SearchBox;
