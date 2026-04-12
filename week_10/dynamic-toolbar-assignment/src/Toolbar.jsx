import AlertButton from "./AlertButton";

const buttons = [
  { message: "Downloading!", children: "⬇ Download File" },
  { message: "Sharing!", children: "🔗 Share Document" },
  { message: "Printing!", children: "🖨 Print Page" },
  { message: "Saving!", children: "💾 Save Draft" },
];

function Toolbar() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        borderRadius: "12px",
        justifyContent: "center",
      }}
    >
      {buttons.map((btn, index) => (
        <AlertButton key={index} message={btn.message}>
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;