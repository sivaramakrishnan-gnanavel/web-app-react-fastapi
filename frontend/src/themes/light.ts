import { createTheme } from "@mui/material";
import type {} from "@mui/x-data-grid/themeAugmentation";

const lightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1920,
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#0000A0",
      contrastText: "#FFF",
    },
  },
  typography: {
    fontFamily: "mars-centra-book",
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "4px",
          padding: "8px 24px",
          lineHeight: "1rem",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "2px solid #1976d2", // Custom border for the grid
          fontSize: "1rem", // Custom font size for cells
          backgroundColor: "#f5f5f5", // Custom background color
        },
        columnHeaders: {
          backgroundColor: "#d32f2f", // Custom background for header row
          // color: "#ffffff", // Text color for header
          fontSize: "1.1rem", // Custom font size for header text
        },
        row: {
          "&:hover": {
            backgroundColor: "#e0f7fa", // Custom hover effect for rows
          },
        },
        cell: {
          padding: "8px", // Custom padding for cells
        },
        footerContainer: {
          backgroundColor: "#1976d2", // Custom background color for footer
          color: "#ffffff", // Custom footer text color
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 1201,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: "56px",
          paddingInline: "24px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: ".5rem",
          fontSize: "14px",
          borderRadius: "4px",
        },
        root: {
          // minWidth: '215px',
          borderRadius: "4px",
          height: "2.25rem",
          padding: "0rem",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderRadius: "4px",
        },
        list: {
          padding: "0",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "8px",
          height: "34px",
          "&.Mui-selected": {
            backgroundColor: "#F4F4FF",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#D9D9D9",
          margin: "1rem",
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          color: "#717171",
          textTransform: "none",
          "&.Mui-selected": {
            fontFamily: "mars-centra-bold",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          borderRadius: 0,
        },
      },
    },
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: "none",
          background: "none",
          padding: "0",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          scrollbarWidth: "thin",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollbarWidth: "thin",
        },
        body: {
          scrollbarColor: "#c1c1c1 #f1f1f1",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#f1f1f1",
            width: "9px",
            height: "9px",
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#c1c1c1",
            minHeight: 24,
            border: "3px solid #f1f1f1",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#959595",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#f1f1f1",
          },
        },
        ".MuiBox-root": {
          scrollbarWidth: "thin",
        },
      },
    },
  },
});

export default lightTheme;
