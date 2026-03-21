import AlertButton from "./AlertButton";

function Toolbar() {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "12px",
      }}
    >
      <AlertButton message="Now playing!">▶ Play</AlertButton>
      <AlertButton message="Uploading your file...">⬆ Upload</AlertButton>
      <AlertButton message="Volume adjusted!">🔊 Volume</AlertButton>
    </div>
  );
}

export default Toolbar;