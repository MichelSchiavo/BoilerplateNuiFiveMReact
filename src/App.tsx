import { useOppenedNuiContext } from "contexts/OppenedNuiContext";

function App() {
  const { status } = useOppenedNuiContext();

  return <>{status ? <h1>Nui OPEN</h1> : null}</>;
}

export default App;
