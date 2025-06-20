import React from "react";
import SkipButton from "./skip-button";

export default function GenderArea() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Última etapa, aqui você poderia redirecionar para o fórum, dashboard, etc.
    alert("Cadastro concluído!");
  };

  return (
    <div className="login-container">
      <SkipButton to="/forum" />
      <h2>Identificação</h2>
      <form onSubmit={handleSubmit}>
        <select className="input-field" name="sexo" required>
          <option value="">Selecione o sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
          <option value="outro">Outro</option>
        </select>
        <input className="input-field" name="area" type="text" placeholder="Área de atuação" required />
        <button className="login-btn" type="submit">Finalizar</button>
      </form>
    </div>
  );
}
