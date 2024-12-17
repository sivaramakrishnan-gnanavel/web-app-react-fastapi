import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { getTasks, addTask, updateTask, deleteTask } from "../../services/task";
import { Add, Delete, Edit } from "@mui/icons-material";

const inputColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "taskDetails",
    headerName: "Task Details",
    width: 150,
    editable: false,
  },
  {
    field: "assignedTo",
    headerName: "Assigned To",
    width: 110,
    editable: false,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    editable: false,
  },
  { field: "comments", headerName: "Comments", width: 110, editable: false },
  { field: "ETA", headerName: "ETA", width: 110, editable: false },
];

const TaskTable = () => {
  const [rows, setRows] = useState([]);
  const [editRow, setEditRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogFlag, setOpenDialogFlag] = useState(null);

  const fetchRows = async () => {
    try {
      const data = await getTasks();
      setRows(data);
    } catch (error) {
      alert("Failed to fetch rows. Check console for details.");
    }
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const handleAddRow = () => {
    setEditRow({ id: rows.length + 1, name: "", age: 0, profession: "" });
    setOpenDialogFlag("Add");
    setOpenDialog(true);
  };

  const handleEditRow = (row) => {
    setEditRow(row);
    setOpenDialogFlag("Edit");
    setOpenDialog(true);
  };

  const handleDeleteRow = async (id) => {
    try {
      await deleteTask(id);
      setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    } catch (error) {
      alert("Failed to delete row. Check console for details.");
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditRow(null);
  };

  const handleSaveRow = async () => {
    try {
      if (openDialogFlag == "Edit") {
        const updated = await updateTask(editRow.id, editRow);
        setRows((prevRows) =>
          prevRows.map((row) => (row.id === updated.id ? updated : row))
        );
      } else {
        const addedRow = await addTask(editRow);
        setRows((prevRows) => [...prevRows, addedRow]);
      }
    } catch (error) {
      alert("Failed to edit row. Check console for details.");
    }
    handleDialogClose();
  };

  const actionColumn = {
    field: "actions",
    headerName: "Actions",
    type: "actions",
    width: 150,
    renderCell: (params) => [
      <GridActionsCellItem
        key={`${params.id}-edit`}
        icon={<Edit />}
        label="Edit"
        onClick={() => handleEditRow(params.row)}
        showInMenu={false}
      />,
      <GridActionsCellItem
        key={`${params.id}-delete`}
        icon={<Delete />}
        label="Delete"
        onClick={() => handleDeleteRow(params.id)}
        showInMenu={false}
      />,
    ],
  };

  const columns = [...inputColumns, actionColumn];

  const CustomToolbar = () => (
    <GridToolbarContainer
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "8px",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Button startIcon={<Add />} onClick={handleAddRow}>
        Add Row
      </Button>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
        }}
        disableSelectionOnClick
        // autoWidth
      />
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          {editRow?.id && openDialogFlag == "Edit" ? "Edit Row" : "Add Row"}
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            fullWidth
            value={editRow?.name || ""}
            onChange={(e) =>
              setEditRow((prev) =>
                prev ? { ...prev, name: e.target.value } : null
              )
            }
          />
          <TextField
            margin="dense"
            label="Age"
            type="number"
            fullWidth
            value={editRow?.age || ""}
            onChange={(e) =>
              setEditRow((prev) =>
                prev
                  ? { ...prev, age: parseInt(e.target.value, 10) || 0 }
                  : null
              )
            }
          />
          <TextField
            margin="dense"
            label="Profession"
            fullWidth
            value={editRow?.profession || ""}
            onChange={(e) =>
              setEditRow((prev) =>
                prev ? { ...prev, profession: e.target.value } : null
              )
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleSaveRow}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskTable;
