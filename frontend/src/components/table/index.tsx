import * as React from "react";
import { DataGrid, GridColDef, GridActionsCellItem } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const initialRows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 12, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 13, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 14, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 16, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  const [rows, setRows] = React.useState(initialRows);
  const [search, setSearch] = React.useState("");

  const handleAddRow = () => {
    const newRow = { id: uuidv4(), lastName: "", firstName: "", age: null };
    setRows((prevRows: any) => [...prevRows, newRow]);
  };

  const handleEditRow = (id: any) => {
    const editedRows = rows.map((row) =>
      row.id === id ? { ...row, firstName: "Edited", lastName: "Name" } : row
    );
    setRows(editedRows);
  };

  const handleDeleteRow = (id: any) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleSearchChange = (e: any) => {
    setSearch(e.target.value);
  };

  const filteredRows = rows.filter(
    (row) =>
      row.firstName?.toLowerCase().includes(search.toLowerCase()) ||
      row.lastName?.toLowerCase().includes(search.toLowerCase())
  );

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
          onClick={() => handleEditRow(params.id)}
        />,
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDeleteRow(params.id)}
        />,
      ],
    },
  ];

  return (
    <Paper sx={{ height: 500, width: "100%", padding: 2 }}>
      {/* Toolbar with Add Row and Search */}
      <div
        style={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddRow}
        >
          Add Row
        </Button>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
