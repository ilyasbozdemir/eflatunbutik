import React from "react";

import {
  Input,
  FormControl,
  InputGroup,
  InputRightElement,
  IconButton,
  Button,
  Flex,
  Avatar,
  Text,
  Box,
} from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { encode, decode } from "html-entities";
import { useSearchParams } from "react-router-dom";

import SearchAutocomplete from "./SearchAutocomplete";

function SearchBox() {
  const [isActive, setIsActive] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = React.useState(decode(searchParams.get("q")));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsActive("active");
    e.preventDefault();
    if (value !== "") navigate(`/ara?q=${encode(value)}`);
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <SearchAutocomplete />
      </form>
    </>
  );
}

export default SearchBox;
