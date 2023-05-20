import { ThemeProvider, colors, createTheme } from "@mui/material";

export const Provider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.grey[300],
    },
    secondary: {
      main: "#5b5b5b",
    },
    info: {
      main: "#1B98F5",
      dark: "#030303",
    },
    success: {
      main: "#00D84A",
    },
    error: {
      main: colors.red[600],
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(255,255,255,0.00)",
            backgroundColor: colors.red[400],
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.grey[300],
            borderRadius: "5px",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 350,
      sm: 550,
      md: 808,
      lg: 1200,
    },
  },
});
