import { useState, useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const INITIAL_VOTES = {
  React: 0,
  Vue: 0,
  Angular: 0,
  Svelte: 0,
};

export default function PollDashboard() {
  const [votes, setVotes] = useState(INITIAL_VOTES);
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  function handleVote(framework) {
    setVotes((prev) => ({
      ...prev,
      [framework]: prev[framework] + 1,
    }));
  }

  useEffect(() => {
    // Situation 1 — No chart exists yet, create it for the first time
    if (!chartInstanceRef.current) {
      chartInstanceRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: Object.keys(votes),
          datasets: [{
            label: "Votes",
            data: Object.values(votes),
            backgroundColor: [
              "#378ADD",
              "#1D9E75",
              "#E24B4A",
              "#EF9F27",
            ],
          }],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: { stepSize: 1 },
            },
          },
        },
      });
    } else {
      // Situation 2 — Chart already exists, just update the data
      chartInstanceRef.current.data.datasets[0].data = Object.values(votes);
      chartInstanceRef.current.update();
    }

    // Running new Chart() on every render without destroying the old one causes
    // a "Canvas is already in use" error because Chart.js locks the canvas context
    // when it initializes. Creating a second instance on the same canvas corrupts
    // the rendering context and breaks both charts.
    return () => {
      // Situation 3 — Component unmounts, destroy the chart cleanly
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };

  }, [votes]);

  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      fontFamily: "system-ui, sans-serif",
      padding: "0 16px",
    }}>
      <h1 style={{ fontSize: "22px", marginBottom: "24px" }}>
        Favorite JavaScript Framework
      </h1>
  
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
        {Object.keys(votes).map((framework) => (
          <div key={framework} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f4f4f0",
            borderRadius: "8px",
            padding: "12px 16px",
          }}>
            <span
              data-testid={`vote-count-${framework}`}
              style={{ fontWeight: "500" }}>
              {framework}: {votes[framework]}
            </span>
            <button
              data-testid={`vote-button-${framework}`}
              onClick={() => handleVote(framework)}
              style={{
                backgroundColor: "#378ADD",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "6px 16px",
                cursor: "pointer",
                fontWeight: "600",
              }}>
              Vote
            </button>
          </div>
        ))}
      </div>
  
      <canvas data-testid="poll-chart" ref={canvasRef} />
  
    </div>
  );
}