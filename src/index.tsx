import { OppenedNuiContextProvider } from "contexts/OppenedNuiContext";
import ReactDOM from "react-dom/client";
import { EventListener } from "utils/EventListener";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <OppenedNuiContextProvider>
    <EventListener />
    <App />
  </OppenedNuiContextProvider>
);
