import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a78bfa", // Lighter purple for dark mode
      light: "#c4b5fd",
      dark: "#7c3aed",
    },
    secondary: {
      main: "#818cf8", // Indigo for accents
      light: "#93c5fd",
      dark: "#6366f1",
    },
    background: {
      default: "#0f172a", // Dark blue background
      paper: "rgba(30, 41, 59, 0.7)", // Semi-transparent dark blue for glassmorphism
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(30, 41, 59, 0.7)",
          borderRadius: 16,
          transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
          "&:hover": {
            boxShadow: "0 10px 25px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.15)",
            transform: "translateY(-5px)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 12,
          padding: "8px 16px",
        },
        contained: {
          background: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
          boxShadow: "0 4px 10px rgba(124, 58, 237, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #c4b5fd 0%, #8b5cf6 100%)",
            boxShadow: "0 6px 15px rgba(124, 58, 237, 0.4)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(30, 41, 59, 0.7)",
          borderRadius: 16,
          border: "1px solid rgba(148, 163, 184, 0.1)",
          transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
          "&:hover": {
            boxShadow: "0 10px 25px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.15)",
            transform: "translateY(-5px)",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#7c3aed",
          color: "#ffffff",
          boxShadow: "0 4px 10px rgba(124, 58, 237, 0.3)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(124, 58, 237, 0.15)",
          border: "1px solid rgba(124, 58, 237, 0.2)",
          color: "#c4b5fd",
          "&:hover": {
            backgroundColor: "rgba(124, 58, 237, 0.25)",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: "thin",
          scrollbarColor: "#4c1d95 #1e293b",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#1e293b",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#4c1d95",
            borderRadius: "4px",
          },
        },
      },
    },
  },
})

export default theme
