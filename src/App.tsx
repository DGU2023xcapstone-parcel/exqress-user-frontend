import { ThemeProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { theme } from "./style/theme";
import AppRouter from "./routes/AppRouter";
import GlobalStyle from "./style/globalStyle";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/common/navigation";

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <BrowserRouter>
            <AppRouter />
            <Navigation />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
