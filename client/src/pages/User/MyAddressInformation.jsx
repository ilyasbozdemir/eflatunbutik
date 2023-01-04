import { Stack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import AddressCard from "../../components/AddressCard";

function MyAddressInformation() {
  const [addresses, setAddresses] = React.useState([
    {
      name: "name",
      surname: "surname",
      title: "Test Title",
      mail: "xxx@xx.xx",
      addressContent:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      tel: "9999 999 9999",
      il: "xxxxx",
      ilce: "xxxx",
      ulke: "Türkiye",
    },
  ]);
  return (
    <>
      <Stack my={5}>
        <Wrap>
          {addresses.map((address, index) => (
            <>
              <WrapItem>
                <AddressCard
                  title={address.title}
                  addressContent={
                    <>
                      <b>{address.name + " " + address.surname}</b>
                      <p>{address.mail}</p>
                      <p>{address.tel}</p>
                      <p>{address.addressContent}</p>
                      <p>
                        {address.ilce +
                          ", " +
                          address.il +
                          " - " +
                          address.ulke}
                      </p>
                    </>
                  }
                  editButtonClick={() => {}}
                  delButtonClick={() => {}}
                  isEditMode={true}
                />
              </WrapItem>
            </>
          ))}
        </Wrap>
      </Stack>
    </>
  );
}

export default MyAddressInformation;
