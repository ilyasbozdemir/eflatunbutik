import { useState } from "react";
import { Box, Flex, useBreakpointValue, Spacer, Text } from "@chakra-ui/react";
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
  const navigate = useNavigate();
  const location = useLocation();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchProductCount, setSearchProductCount] = useState(4);
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (e) => {
    const { name, value } = e.target;

    alert(`?${name}=${value}`);
  };

  return (
    <>
      <Flex direction={"row"} ml={2}>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box ml={3} minWidth="max-content" justifyContent={"space-around"}>
          <ProductContent
            showSidebarButton={variants?.navigationButton}
            onShowSidebar={toggleSidebar}
          />
          {isSearchPage ?? isSearchPage === true ? (
            <>
              <Flex minWidth="max-content" alignItems="center" gap="2">
                <Box p="2">
                  <Text>
                    <Text as="span" fontWeight={"bold"}>
                      {` ${searchParams.get("q")} `}{" "}
                    </Text>
                    ile ilgili
                    <Text as="span" fontWeight={"bold"}>
                      {" " + searchProductCount}
                    </Text>
                    {` ürün bulduk.`}
                  </Text>
                </Box>
                <Spacer />
                <Box gap="2">
                  <Select
                    w={"100%"}
                    name="siralama"
                    placeholder="Sıralama"
                    onChange={onChange}
                  >
                    <option value="varsayilansiralama">
                      Varsayılan Sıralama
                    </option>
                    {/*?siralama=varsayilanSiralama*/}
                    <option value="artanfiyat">Artan Fiyat</option>
                    {/*?siralama=artanFiyat */}
                    <option value="azalanfiyat">Azalan Fiyat</option>
                    {/*?siralama=azalanFiyat */}
                    <option value="degerlendirmepuani">
                      Çok Değerlendirilenler
                    </option>
                    {/*?siralama=degerlendirmepuanı */}
                    <option value="yuksekpuanlilar">Yüksek Puanlılar</option>
                    {/*?siralama=yuksekpuanlilar */}
                    <option value="indirimliurunler">İndirim Oranı</option>
                    {/*?siralama=indirimliurunler */}
                    <option value="enyeni">Yeni Eklenenler</option>
                    {/*?siralama=enyeni */}
                  </Select>
                </Box>
              </Flex>
            </>
          ) : (
            ""
          )}
          <Box p={2}>{children}</Box>
        </Box>
      </Flex>
    </>
  );
}

export default FilterProductCategory;
