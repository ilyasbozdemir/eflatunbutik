import { useState, useRef, useEffect } from "react";
import autoAnimate from "@formkit/auto-animate";

import {
  Box,
  Flex,
  useBreakpointValue,
  Spacer,
  Text,
  HStack,
  Button,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

import {
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  CloseButton,
} from "@chakra-ui/react";

import { Select } from "@chakra-ui/react";
import ProductContent from "./ProductContent";
import Sidebar from "./Sidebar";
import { encode, decode } from "html-entities";

import { useNavigate, useLocation, useSearchParams } from "react-router-dom";

import { useWindowDimensions } from "../../../src/hooks/";

import { MainContext, useContext } from "../../contexts/MainContext";

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
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const windowDimensions = useWindowDimensions();

  const { tags, setTags } = useContext(MainContext);

  const deleteByValue = (value) => {
    setTags((oldValues) => {
      return oldValues.filter((tag) => tag !== value);
    });
  };

  return (
    <>
      <Flex direction={"row"}>
        <Sidebar
          variant={variants?.navigation}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
        <Box minWidth="max-content" justifyContent={"space-between"}>
          {isSearchPage ?? isSearchPage === true ? (
            <>
              <Flex
                direction={{ base: "column", md: "row" }}
                minWidth="max-content"
                gap="2"
              >
                "
                <Box ml={5}>
                  <Text>
                    <Text as="span" fontWeight={"bold"}>
                      {` ${searchParams.get("q")} `}
                    </Text>
                    ile ilgili
                    <Text as="span" fontWeight={"bold"}>
                      {" " + searchProductCount}
                    </Text>
                    {` sonuç listeleniyor.`}
                  </Text>
                </Box>
                <Spacer />
                {variants?.navigationButton === false ? ( //mobile false search true
                  <Box gap="2" mx={4}>
                    <SelectBox onChange={onChange} />
                  </Box>
                ) : (
                  ""
                )}
                {variants?.navigationButton === true ? ( //mobile true
                  <Box gap="2">
                    <HStack>
                      <ProductContent
                        showSidebarButton={variants?.navigationButton}
                        onShowSidebar={toggleSidebar}
                      />

                      <SelectBox onChange={onChange} />
                      {/*mobile false category true*/}
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
                  justifyContent={{ base: "space-between", lg: "flex-end" }}
                  ml={5}
                >
                  <SelectBox onChange={onChange} />
                </Flex>
              </HStack>
            </Box>
          )}

          {tags.length > 0 ? (
            <Box
              ml={3}
              mt={3}
              border={"1px solid #ccc"}
              borderRadius={"15px"}
              maxW={{ base: windowDimensions.width - 100, lg: "container.md" }}
            >
              <Wrap p={3} ref={parent} id="selected-filters-container">
                {tags.map((tag, i) => (
                  <>
                    <WrapItem>
                      <Tag
                        size="md"
                        key={i}
                        variant="solid"
                        colorScheme="gray"
                        boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                      >
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton onClick={() => deleteByValue(tag)} />
                      </Tag>
                    </WrapItem>
                  </>
                ))}

                <WrapItem>
                  <Button
                    size="sm"
                    onClick={() => {
                      setTags([]);
                    }}
                    colorScheme={"purple"}
                  >
                    Filtreleri Temizle
                  </Button>
                </WrapItem>
              </Wrap>
            </Box>
          ) : (
            ""
          )}
          <Box>{children}</Box>
        </Box>
      </Flex>
    </>
  );
}
const SelectBox = ({ onChange }) => {
  return (
    <Select size={"md"} w={"100%"} name="siralama" onChange={onChange}>
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
