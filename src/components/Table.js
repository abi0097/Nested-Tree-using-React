import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import data from "../data/employeeRecords.json";
import companyData from "../data/company.json";
import { useParams } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 80, headerClassName: "header-color" },
  {
    field: "name",
    headerName: "First Name",
    headerClassName: "header-color",
    width: 150,
    editable: true,
    
  },
  {
    field: "role",
    headerName: "Role",
    sortable: true,
    width: 150,
    headerClassName: "header-color",
  },
  {
    field: "dob",
    headerName: "Date of Birth",
    width: 180,
    editable: false,
    headerClassName: "header-color",
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
    editable: true,
    headerClassName: "header-color",
  },
  {
    field: "gender",
    headerName: "Gender",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    editable: true,
    width: 120,
    headerClassName: "header-color",
  },
  {
    field: "email",
    headerName: "Email",
    headerClassName: "header-color",
    width: 200,
  },
  {
    field: "experience",
    headerName: "Experience",
    sortable: true,
    width: 120,
    headerClassName: "header-color",
  },
  {
    field: "doj",
    headerName: "Date of Joining",
    width: 180,
    editable: false,
    headerClassName: "header-color",
  },
  {
    field: "contacts",
    headerName: "Mobile",
    width: 150,
    editable: false,
    headerClassName: "header-color",
  },
];

export default function Table() {
  const params = useParams();

  // Extract companyId from params
  const companyId = Number(params.id);

  // Filter employee records based on companyId
  const employeeRecord = data.filter((d) => d.companyId === companyId);

  // Find the company based on companyId
  const company = companyData.find((d) => d.id === companyId);

  return (
    <>
      <h1 style={{ width: "100%", margin: "20px auto", textAlign: "center" }}>
        {company.title}
      </h1>
      {employeeRecord && columns && (
        <Box sx={{ height: "auto", width: "fit-content", margin: "20px auto" }}>
          <DataGrid
            rows={employeeRecord ? employeeRecord : []}
            columns={columns ? columns : []}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
            experimentalFeatures={{
              lazyLoading: true,
            }}
            sx={{ '& .MuiDataGrid-row': { fontSize:'1.1em' } }}
          />
        </Box>
      )}
    </>
  );
}
