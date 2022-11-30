import * as React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
function DataTable({ data, columns }) {
  const [sorting, setSorting] = React.useState([]);
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });
  return React.createElement(
    Table,
    null,
    React.createElement(
      Thead,
      null,
      table.getHeaderGroups().map((headerGroup) =>
        React.createElement(
          Tr,
          { key: headerGroup.id },
          headerGroup.headers.map((header) => {
            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
            const meta = header.column.columnDef.meta;
            return React.createElement(
              Th,
              {
                key: header.id,
                onClick: header.column.getToggleSortingHandler(),
                isNumeric:
                  meta === null || meta === void 0 ? void 0 : meta.isNumeric,
              },
              flexRender(header.column.columnDef.header, header.getContext()),
              React.createElement(
                chakra.span,
                { pl: "4" },
                header.column.getIsSorted()
                  ? header.column.getIsSorted() === "desc"
                    ? React.createElement(TriangleDownIcon, {
                        "aria-label": "sorted descending",
                      })
                    : React.createElement(TriangleUpIcon, {
                        "aria-label": "sorted ascending",
                      })
                  : null
              )
            );
          })
        )
      )
    ),
    React.createElement(
      Tbody,
      null,
      table.getRowModel().rows.map((row) =>
        React.createElement(
          Tr,
          { key: row.id },
          row.getVisibleCells().map((cell) => {
            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
            const meta = cell.column.columnDef.meta;
            return React.createElement(
              Td,
              {
                key: cell.id,
                isNumeric:
                  meta === null || meta === void 0 ? void 0 : meta.isNumeric,
              },
              flexRender(cell.column.columnDef.cell, cell.getContext())
            );
          })
        )
      )
    )
  );
}
export default DataTable;
