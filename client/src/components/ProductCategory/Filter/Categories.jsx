import React from "react";
import { Text, Box, Icon } from "@chakra-ui/react";

import { linkItems } from "../../../constants/LinkItems";
import { Link, useLocation } from "react-router-dom";

import { BiSubdirectoryRight } from "react-icons/bi";

function Categories() {
  const location = useLocation();
  const [loc, setLoc] = React.useState(location.pathname);

  React.useEffect(() => {
    setLoc(location.pathname);
  }, [location]);

  return (
    <Box w={"100%"} fontFamily={"corbel"}>
      <Text fontWeight={"semibold"} fontFamily={"system-ui, sans-serif"}>
        {"Kategoriler"}
      </Text>
      {linkItems.map((link, i) => (
        <Box key={i} pb={1}>
          <Link to={link.href}>
            <Text py={1} fontSize={13}>
              {" "}
              {link.label}
            </Text>
          </Link>

          {loc === link.href
            ? link.childrens.map((children, j) => (
                <Box key={j} pb={1} pl={3}>
                  <Link to={children.href}>
                    <Text py={1} fontSize={13}>
                      <Icon as={BiSubdirectoryRight} color="blackAlpha.600" />
                      {children.label}
                    </Text>
                  </Link>
                </Box>
              ))
            : ""}
        </Box>
      ))}
    </Box>
  );
}

export default Categories;
