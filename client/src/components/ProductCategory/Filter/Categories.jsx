import React from "react";
import { Text, Box } from "@chakra-ui/react";

import { linkItems } from "../../../constants/LinkItems";
import { Link, useLocation } from "react-router-dom";

function Categories() {
  const location = useLocation();
  const [loc, setLoc] = React.useState(location.pathname);

  React.useEffect(() => {
    setLoc(location.pathname);
  }, [location]);

  return (
    <Box w={"90%"}>
      <Text fontWeight={"semibold"}>{"Kategoriler"}</Text>
      {linkItems.map((link, i) => (
        <Box key={i} pb={1}>
          <Link to={link.href}> {link.label}</Link>
          {loc === link.href
            ? link.childrens.map((children, j) => (
                <Box key={j} pb={1} pl={3}>
                  <Link to={children.href}> {children.label}</Link>
                </Box>
              ))
            : ""}
        </Box>
      ))}
    </Box>
  );
}

export default Categories;
