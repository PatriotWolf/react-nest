import { Montserrat, Caveat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const montSerrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#72BE44" },
    secondary: { main: "#E2ECFA" },
  },
  typography: {
    fontFamily: `${montSerrat.style.fontFamily}`,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
  },
});

export default theme;
