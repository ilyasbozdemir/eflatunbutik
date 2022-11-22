import React from "react";

import LogIn from "../../components/LogIn";
import MemberShip from "../../components/MemberShip";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import LoginMemberWrapper from "./LoginMemberWrapper";

function index() {
  const pathname = window.location.pathname;

  let tabIndex = 0;

  if (pathname === "/giris") {
    tabIndex = 0;
  } else if (pathname === "/uyelik") {
    tabIndex = 1;
  }

  const handleTabsChange = (index) => {
    tabIndex = index;
  };
  return (
    <>
      <Container
        maxW="lg"
        py={{
          base: "12",
          md: "24",
        }}
        px={{
          base: "0",
          sm: "8",
        }}
      >
        <Tabs index={tabIndex} onChange={handleTabsChange} variant="enclosed">
          <TabList>
            <Tab>
              <Link to="/giris">Giriş Yap</Link>
            </Tab>
            <Tab>
              <Link to="/uyelik">Üye Ol</Link>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LoginMemberWrapper>
                  <LogIn />
              </LoginMemberWrapper>
            </TabPanel>
            <TabPanel>
            <LoginMemberWrapper>
               <MemberShip />
            </LoginMemberWrapper>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}

export default index;
