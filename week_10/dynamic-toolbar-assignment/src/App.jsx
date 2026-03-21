import Toolbar from "./Toolbar";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Dynamic Alert Toolbar</h1>
      <p>Buttons rendered dynamically from an array using .map()</p>
      <Toolbar />
    </div>
  );
}

export default App;