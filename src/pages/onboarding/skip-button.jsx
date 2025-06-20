import React from "react";
import { useNavigate } from "react-router-dom";

export default function SkipButton({ to }) {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "right", marginBottom: "10px" }}>
      <button
        onClick={() => navigate(to)}
        style={{
          background: "transparent",
          color: "#3a86ff",
          border: "none",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Pular
      </button>
    </div>
  );
}
