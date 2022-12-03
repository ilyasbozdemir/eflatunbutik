import React from "react";

import { Input } from "@chakra-ui/react";

import "./style.css";

import { useNavigate } from "react-router-dom";

function SearchBox() {
  const [isActive, setIsActive] = React.useState("");
  const [value, setValue] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/ara?");
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <div class={"search-box " + isActive}>
          <Input
            type="text"
            placeholder="Ara..."
            _focus={{ variant: "outline" }}
            maxLength={30}
            onKeyPress={handleKeypress}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <div
            class="search-btn"
            onClick={() => {
              setIsActive("active");
            }}
          >
            <i class="fas fa-search"></i>
          </div>

          <div
            class="cancel-btn"
            onClick={() => {
              setIsActive("");
              setValue("");
            }}
          >
            <i class="fas fa-times"></i>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBox;
