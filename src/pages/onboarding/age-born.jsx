import React from "react";
import { useNavigate } from "react-router-dom";
import SkipButton from "./skip-button";

export default function AgeBorn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode salvar os dados no localStorage, context API, etc
    navigate("/university-course");
  };

  return (
    <div className="login-container">
      <SkipButton to="/university-course" />
      <h2>Informações Pessoais</h2>
      <form onSubmit={handleSubmit}>
        <input className="input-field" name="idade" type="number" placeholder="Idade" required />
        <input className="input-field" name="dataNasc" type="date" placeholder="Data de nascimento" required />
        <button className="login-btn" type="submit">Continuar</button>
      </form>
    </div>
  );
}
