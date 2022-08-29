import type { AppProps } from "next/app";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import AuthWrapper from "../components/AuthWrapper/AuthWrapper";

import "../styles/globals.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AuthWrapper>
        <Component {...pageProps} />
      </AuthWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
