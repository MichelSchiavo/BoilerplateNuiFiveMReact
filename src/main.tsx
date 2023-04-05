import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global-styles";
import { EventListener } from "./utils/EventListener";
import { NuiContextProvider } from "./context/NuiContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <NuiContextProvider>
    <ThemeProvider theme={theme}>
      <EventListener />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </NuiContextProvider>
);
