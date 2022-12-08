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

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [closeButtonShow, setCloseButtonShow] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(
    decode(searchParams.get("q"))
  );

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
        <Stack spacing={4}>
          <Flex
            direction={"row"}
            border={"1px solid"}
            borderRadius={"16px"}
            pos={"relative"}
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
                _placeholder={{
                  color: "#7928CA",
                }}
               
              />
              {closeButtonShow === true ? (
                <InputRightElement
                  children={
                    <Icon
                      onClick={() => setInputValue("")}
                      bg="transparent"
                      _hover={{ bg: "transparent" }}
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
              bg="transparent"
              _hover={{ bg: "transparent" }}
              icon={<FiSearch borderRadius="16px 0 0 16px" />}
            />
          </Flex>
        </Stack>
      </form>
    </>
  );
}

export default SearchBox;
