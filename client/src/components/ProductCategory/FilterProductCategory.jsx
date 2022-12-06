import React, { useState } from "react";
import {
  Box,
  Flex,
  useBreakpointValue,
  Spacer,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";
import { encode, decode } from "html-entities";

import { useSearchParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const smVariant = { navigation: "drawer", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

function FilterProductCategory(props) {
  const { children, isSearchPage } = props;

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchProductCount, setSearchProductCount] = useState(4);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (location.pathname.startsWith("/ara"))
      setSearchParams({
        q: searchParams.get("q"),
        [name]: value,
      });
    else {
      setSearchParams({
        [name]: value,
      });
    }
  };

  return (
    <>
      <Flex direction={"row"} ml={2}>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={3} minWidth="max-content" justifyContent={"space-between"}>
          {isSearchPage ?? isSearchPage === true ? (
            <>
              <Flex
                direction={{ base: "column", md: "row" }}
                minWidth="max-content"
                alignItems="center"
                gap="2"
              >
                <Box>
                  <Text>
                    <Text as="span" fontWeight={"bold"}>
                      {` ${searchParams.get("q")} `}
                    </Text>
                    ile ilgili
                    <Text as="span" fontWeight={"bold"}>
                      {" " + searchProductCount}
                    </Text>
                    {` ürün bulduk.`}
                  </Text>
                </Box>
                <Spacer />
                {variants?.navigationButton === false ? (
                  <Box gap="2" mx={4}>
                    <SelectBox onChange={onChange} />
                  </Box>
                ) : (
                  ""
                )}

                {variants?.navigationButton === true ? (
                  <Box gap="2">
                    <HStack>
                      <ProductContent
                        showSidebarButton={variants?.navigationButton}
                        onShowSidebar={toggleSidebar}
                      />

                      <SelectBox onChange={onChange} />
                    </HStack>
                  </Box>
                ) : (
                  ""
                )}
              </Flex>
            </>
          ) : (
            <Box gap="2">
              <HStack>
                <ProductContent
                  showSidebarButton={variants?.navigationButton}
                  onShowSidebar={toggleSidebar}
                />
                <Flex
                  justifyContent={{ base: "space-between", md: "flex-end" }}
                >
                  <SelectBox onChange={onChange} />
                </Flex>
              </HStack>
            </Box>
          )}
          <Box p={2}>{children}</Box>
        </Box>
      </Flex>
    </>
  );
}
const SelectBox = ({ onChange }) => {
  return (
    <Select
      w={"100%"}
      name="siralama"
      onChange={onChange}
    >
      <option value="varsayilansiralama">Varsayılan Sıralama</option>
      {/*?siralama=varsayilanSiralama*/}
      <option value="artanfiyat">Artan Fiyat</option>
      {/*?siralama=artanFiyat */}
      <option value="azalanfiyat">Azalan Fiyat</option>
      {/*?siralama=azalanFiyat */}
      <option value="degerlendirmepuani">Çok Değerlendirilenler</option>
      {/*?siralama=degerlendirmepuanı */}
      <option value="yuksekpuanlilar">Yüksek Puanlılar</option>
      {/*?siralama=yuksekpuanlilar */}
      <option value="indirimliurunler">İndirim Oranı</option>
      {/*?siralama=indirimliurunler */}
      <option value="enyeni">Yeni Eklenenler</option>
      {/*?siralama=enyeni */}
    </Select>
  );
};
export default FilterProductCategory;
