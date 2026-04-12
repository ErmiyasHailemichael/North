import Header from "./components/Header";
import Footer from "./components/Footer";

import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";

function App() {
  return (
    <div>
      <Header />

      <main
        style={{
          padding: "48px 40px",
          display: "flex",
          gap: "24px",
        }}
      >
        <ContentA />
        <ContentB />
      </main>

      <Footer />
    </div>
  );
}

export default App;