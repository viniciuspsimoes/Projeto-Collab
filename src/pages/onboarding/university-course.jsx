import React from "react";
import { useNavigate } from "react-router-dom";
import SkipButton from "./skip-button";

export default function UniversityCourse() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/gender-area");
  };

  return (
    <div className="login-container">
      <SkipButton to="/gender-area" />
      <h2>Formação Acadêmica</h2>
      <form onSubmit={handleSubmit}>
        <input className="input-field" name="universidade" type="text" placeholder="Universidade" required />
        <input className="input-field" name="curso" type="text" placeholder="Curso" required />
        <button className="login-btn" type="submit">Continuar</button>
      </form>
    </div>
  );
}
