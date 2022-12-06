import React from "react";

import { Input } from "@chakra-ui/react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { encode, decode } from "html-entities";
import { useSearchParams } from "react-router-dom";
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
        <>
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
              onClick={""}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />
            <div className="search-btn" onClick={handleSubmit}>
              <i class="fas fa-search"></i>
            </div>

            <div
              className="cancel-btn"
              onClick={() => {
                setIsActive("");
                setValue("");
              }}
            >
              <i class="fas fa-times"></i>
            </div>
          </div>
        </>
      </form>
    </>
  );
}

export default SearchBox;
