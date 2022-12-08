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
  HStack,
} from "@chakra-ui/react";

import styles from "./index.module.css";

import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";

function SearchBox() {
  const [isActive, setIsActive] = React.useState(false);

  const [searchHistory, setSearchHistory] = React.useState([
    { id: 1, name: "Elbise", to: "/elbise/" },
    { id: 2, name: "trençkot", to: "/trenckot/" },
    { id: 3, name: "kaban", to: "/kaban/" },
  ]);

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
  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <form autocomplete="off" onSubmit={handleSubmit}>
        <Stack spacing={4} ref={searchRef} className={styles.search}>
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
                onKeyPress={handleKeypress}
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
                      _hover={{ bg: "transparent", cursor: "pointer" }}
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
              borderRadius="0 16px 16px 0"
              icon={<FiSearch  />}
            />
          </Flex>
          <Box
            border={inputValue.length > 0 ? "1px solid #A020F0" : null}
            className={styles.search_result}
          >
            {result === true ? (
              result.map((item, index) => (
                <Box
                  key={index}
                  pl={3}
                  className={styles.search_result_item}
                  pt={3}
                  pb={1}
                >
                  {item.title}
                </Box>
              ))
            ) : inputValue.length > 0 ? (
              <Box pl={3} className={styles.result_not_found}>
                "{inputValue}" ile ilgili bir ürün veya kategori bulamadık!
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Stack>
      </form>
    </>
  );
}

export default SearchBox;
