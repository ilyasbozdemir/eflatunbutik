import React from "react";
import Dashboard from "../../components/Dashboard/index";
import SettingButton from "../../components/Dashboard/SettingButton";
import DashboardMain from "./DashboardMain";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";

import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

const CurrentBreadcrumb = () => {
  const location = useLocation();
  return (
    <Breadcrumb separator={<IoMdArrowDropright />} color="gray.500">
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <Text>
          {location.pathname === "/admin" ? "Dashboard" : location.pathname}
        </Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

function index() {
  return (
    <>
      <Dashboard>
        <CurrentBreadcrumb />
        <DashboardMain />
        <SettingButton />
      </Dashboard>
    </>
  );
}

export default index;
