import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import  DataTable  from "./DataTable";
const data = [
  {
    searchTerm: "Tunik",
    searchCount: 50,
  },
  {
    searchTerm: "Pantolon",
    searchCount: 45,
  },
  {
    searchTerm: "Muhteşem Tasarım Elbise",
    searchCount: 38,
  },
];
const columnHelper = createColumnHelper();
const columns = [
  columnHelper.accessor("searchTerm", {
    cell: (info) => info.getValue(),
    header: "Arama Terimi",
  }),
  columnHelper.accessor("searchCount", {
    cell: (info) => info.getValue(),
    header: "Arama Sayısı",
    meta: {
      isNumeric: true,
    },
  }),
];

function SearchTermsTable() {
  return <DataTable columns={columns} data={data} />;
}

export default SearchTermsTable;
