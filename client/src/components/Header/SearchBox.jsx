import React from "react";
import { Input, Button, HStack, Box, FormLabel } from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";

import "./style.css";

function SearchBox() {
  return (
    <>
      <>
        <div className="search">
          <input type="checkbox" id="trigger" className="search__checkbox" />
          <label className="search__label-init" for="trigger"></label>
          <label className="search__label-active" for="trigger"></label>
          <div className="search__border"></div>
          <input type="text" className="search__input" />
          <div className="search__close"></div>
        </div>
      </>
    </>
  );
}

export default SearchBox;
