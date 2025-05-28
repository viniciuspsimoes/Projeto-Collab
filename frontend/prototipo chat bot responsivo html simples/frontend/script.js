async function enviarPrompt() {
  const prompt = document.getElementById('prompt').value;
  const respostaEl = document.getElementById('resposta');

  respostaEl.textContent = "Carregando...";

  try {
    const response = await fetch('/api/perguntar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const data = await response.json();
    respostaEl.textContent = data.resposta || "Sem resposta da API.";
  } catch (error) {
    respostaEl.textContent = `Erro: ${error.message}`;
  }
}
