import React from "react";

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
const animatedComponents = makeAnimated();

//import { colourOptions }/
function MyOrders() {
  const optionsOrder = [
    { value: "onay bekliyor", label: "Onay bekliyor" },
    { value: "onaylandı", label: "Onaylandı" },
    { value: "tamamlandı", label: "Tamamlandı" },
    { value: "iptal edildi", label: "İptal edildi" },
  ];
  const optionsPayment = [
    { value: "ödeme bekliyor", label: "Ödeme bekliyor" },
    { value: "kontrol ediliyor", label: "Kontrol ediliyor" },
    { value: "ödeme tamamlandı", label: "Ödeme tamamlandı" },
    { value: "iade edildi", label: "İade edildi" },
    { value: "kısmi iade edildi", label: "Kısmi iade edildi" },
    { value: "ödeme alınamadı", label: "Ödeme alınamadı" },
  ];
  const optionsCargo = [
    { value: "kargo bekliyor", label: "Kargo Bekliyor" },
    { value: "kargo gönderildi", label: "Kargo Gönderildi" },
    { value: "parçalı gönderi", label: "Parçalı Gönderi" },
    { value: "teslim edildi", label: "Teslim Edildi" },
    { value: "teslim edilemedi", label: "Teslim Edilemedi" },
  ];
  const onChangeOrder = (e) => {
    //console.table(e);
    //seçili olan optionsOrder dizisini aktarır
  };
  const onChangePayment = (e) => {
    //console.table(e);
    //seçili olan optionsPayment dizisini aktarır
  };
  const onChangeCargo = (e) => {
    //console.table(e);
    //seçili olan optionsCargo dizisini aktarır
  };

  const [dates, setDates] = React.useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <>
      <Stack
        spacing={2}
        p={5}
        userSelect={"none"}
        pos={"relative"}
        zIndex={151}
      >
        <FormControl>
          <FormLabel for={"name"}>Ad :</FormLabel>
          <Input id={"name"} type="text" />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel for={"surname"}>Soyad :</FormLabel>
          <Input id={"surname"} type="text" />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel for={"email"}>Email Adresi :</FormLabel>
          <Input id={"email"} type="email" />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel for={"tel"}>Telefon :</FormLabel>
          <Input id={"tel"} type="tel" />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Stack direction={"row"}>
          <FormControl>
            <FormLabel for={"tel"}>Tarih Aralığı Seçiniz :</FormLabel>
            <DateRange
              onChange={(item) => setDates([item.selection])}
              ranges={dates}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              months={2}
            />
            <FormHelperText></FormHelperText>
          </FormControl>
        </Stack>
        <FormControl>
          <FormLabel for={"tel"}>Sipariş Durumu :</FormLabel>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={optionsOrder}
            onChange={onChangeOrder}
            placeholder="seçiniz"
            isMulti
          />
        </FormControl>
        <FormControl>
          <FormLabel for={"tel"}>Ödeme Durumu :</FormLabel>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={optionsPayment}
            onChange={onChangePayment}
            placeholder="seçiniz"
            isMulti
          />
        </FormControl>
        <FormControl>
          <FormLabel for={"tel"}>Kargo Durumu :</FormLabel>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={optionsCargo}
            onChange={onChangeCargo}
            placeholder="seçiniz"
            isMulti
          />
        </FormControl>

        <Button colorScheme={"green"}>Ara</Button>
      </Stack>
      <Stack spacing={2} p={5}></Stack>
    </>
  );
}

export default MyOrders;
