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
      <h1>Custom Alert Toolbar</h1>
      <p>Click any button to see its alert message!</p>
      <Toolbar />
    </div>
  );
}

export default App;