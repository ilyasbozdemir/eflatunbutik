import React from "react";
import { Input, Button, HStack, Box, FormLabel } from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";

import "./style.css";

function SearchBox() {
  const [isActive, setIsActive] = React.useState("");
  return (
    <>
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <div class={"search-box " + isActive}>
          <input type="text" placeholder="Ara..." />
          <div
            class="search-btn"
            onClick={() => {
              setIsActive('active');
            }}
          >
            <i class="fas fa-search"></i>
          </div>

          <div
            class="cancel-btn"
            color="#000"
            onClick={() => {
              setIsActive('');
            }}
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
      </>
    </>
  );
}

export default SearchBox;
