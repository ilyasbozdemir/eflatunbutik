import { CloseButton, Flex, Link, Select } from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";
import { CartProductMeta } from "./CartProductMeta";
import { MainContext, useContext } from "../../contexts/MainContext";

export const CartItem = (props) => {
  const {
    id,
    isGiftWrapping,
    name,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onClickDelete,
    linkTo,
    body
  } = props;


  const [pQuantity, setPQuantity] = React.useState(quantity);
  const { basket, setBasket } = useContext(MainContext);

  const checkBasket = basket.find((item) => item.id === id);

  React.useEffect(() => {
    if (checkBasket) {
      checkBasket.quantity = pQuantity;
      
      setBasket([...basket.filter((item) => item.id !== id), checkBasket]);
    }

    setBasket((oldValues) => {
      return oldValues.filter((p) => p.id !== 25);
    });
  }, [pQuantity, checkBasket]);

  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      justify="space-between"
      align="center"
    >
      <>
        <CartProductMeta
          name={name}
          description={description}
          image={imageUrl}
          isGiftWrapping={isGiftWrapping}
          body={body}
        />
      </>
      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <>
          <Select
            maxW="64px"
            size={"md"}
            name="quantity"
            value={pQuantity}
            onChange={(e) => {
              setPQuantity(e.currentTarget.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </>

        <PriceTag price={price} currency={currency} />
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={onClickDelete}
        />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Link
          fontSize="sm"
          textDecor="underline"
          aria-label={`Delete ${name} from cart`}
          onClick={onClickDelete}
        >
          Sil
        </Link>

        <>
          <Select
            maxW="64px"
            size={"md"}
            name="quantity"
            value={pQuantity}
            onChange={(e) => {
              setPQuantity(e.currentTarget.value);
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </>

        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
