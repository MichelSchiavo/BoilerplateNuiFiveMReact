import { useNuiNuiContext } from "./context/NuiContext";

function App() {
  const { status } = useNuiNuiContext();

  return <>{status ? <h1>Nui OPEN</h1> : null}</>;
}

export default App;
