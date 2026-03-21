import NestedButtons from "./NestedButtons";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <h1>Event Propagation Demo</h1>
      <p>Click the outer container vs the inner button and watch the difference!</p>
      <NestedButtons />
    </div>
  );
}

export default App;