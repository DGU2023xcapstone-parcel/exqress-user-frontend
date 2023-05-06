import { ThemeProvider } from "@emotion/react";
import AppRouter from "./routes/AppRouter";
import GlobalStyle from "./style/globalStyle";
import { theme } from "./style/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
