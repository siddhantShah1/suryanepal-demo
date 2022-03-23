import React from "react";
import { Box, Button } from "@mui/material";
import tableData from "../assets/SKMTHL.json";
import { useTable } from "react-table/dist/react-table.development";
import { getColumns } from "./columns";
import "./table.css";
// import DataGrid from "react-data-grid";

const MapTable = ({ selectedData, setSelectedWD }) => {
  const [columns, setColumns] = React.useState([]);
  React.useEffect(() => {
    setColumns(getColumns(tableData[0]));
  }, []);
  const data = React.useMemo(() => [selectedData], []);
  const tableInstance = useTable({
    columns: columns,
    data: data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <>
      <Box
        sx={{
          marginTop: 10,
          marginLeft: 5,
          marginRight: 5,
          overflow: "auto",
          alignSelf: "center",
          backgroundColor: "white",
        }}
      >
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((header) => {
              return (
                <tr {...header.getHeaderGroupProps}>
                  {header.headers.map((column) => {
                    return (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Box>
    </>
  );
};

export default MapTable;
