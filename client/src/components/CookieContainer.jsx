import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Flex, Text } from "@chakra-ui/react";

function CookieContainer() {
  //Cookies.set("name", "value", { secure: true });
  //Cookies.get("name"); // => 'value'
  // Cookies.remove("name");

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Kabul Et"
        cookieName="myCookieName"
        style={{ background: "#4A5568", zIndex: 100 }}
        buttonStyle={{
          background: "#1F2733",
          color: "#fff",
          fontSize: "13px",
          textAlign: "center",
        }}
        expires={150}
        /*  enableDeclineButton
        
        onDecline={() => {
          alert("nay!");
        }}
    
        declineButtonText='Reddet'
        */
        onAccept={(acceptedByScrolling) => {
          if (acceptedByScrolling) {
            // triggered if user scrolls past threshold
            alert("Kabul etme, kullanıcı kaydırmasıyla tetiklendi");
          } else {
            alert("Kabul et, Kabul Et düğmesine tıklanarak tetiklendi");
          }
        }}
      >
        <Flex direction={"column"}>
          <Text mb={3} fontSize="2xl">
            Daha iyi bir deneyim için izninizi istiyoruz.
          </Text>
          <span>
            Tanımlama bilgilerini; sitemizin doğru şekilde çalışmasını sağlamak,
            içerikleri ve reklamları kişiselleştirmek, sosyal medya özellikleri
            sunmak ve site trafiğimizi analiz etmek için kullanıyoruz.
          </span>
        </Flex>
      </CookieConsent>
    </>
  );
}

export default CookieContainer;
