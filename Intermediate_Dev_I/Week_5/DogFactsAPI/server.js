const express = require("express");
const dogFacts = require("./dog_facts");

const app = express();
const PORT = 3000;

// ===============================
// Helper Function: Get Random Facts
// ===============================
function getRandomFacts(count) {
  const shuffled = [...dogFacts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}


// ===============================
// Root Route
// ===============================
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Dog Facts API v1 Replica",
    usage: {
      getAllFacts: "/facts",
      getLimitedFacts: "/facts?number=2",
      alias: "/facts?limit=2",
      rawFormat: "/facts?number=1&raw=true"
    }
  });
});


// ===============================
// GET /facts
// ===============================
app.get("/facts", (req, res) => {
  try {
    let { number, limit, raw } = req.query;

    // Use limit as alias for number
    let count = number || limit;

    if (count !== undefined) {
      count = parseInt(count);

      if (isNaN(count) || count <= 0) {
        return res.status(400).json({
          success: false,
          error: "Query parameter 'number' must be a positive integer."
        });
      }

      if (count > 5) {
        count = 5; // max allowed
      }
    } else {
      count = dogFacts.length;
    }

    const selectedFacts = getRandomFacts(count);

    // If raw=true → return plain text
    if (raw === "true") {
      return res.send(selectedFacts.join("\n"));
    }

    // Default JSON response
    res.json({
      facts: selectedFacts,
      success: true
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal Server Error"
    });
  }
});


// ===============================
// 404 Handler
// ===============================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found"
  });
});


// ===============================
// Start Server
// ===============================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
