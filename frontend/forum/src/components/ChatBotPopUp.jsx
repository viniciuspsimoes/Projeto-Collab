import React, { useState } from 'react';

export default function ChatBotPopUp({ onClose }) {
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [loading, setLoading] = useState(false);

  async function enviarPergunta() {
    if (!pergunta.trim()) return;

    setLoading(true);
    setResposta('');
    try {
      const res = await fetch('http://localhost:3000/api/perguntar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: pergunta }),
      });

      if (!res.ok) {
        setResposta('Erro ao obter resposta.');
        setLoading(false);
        return;
      }

      const data = await res.json();
      setResposta(data.resposta || 'Sem resposta da API.');
    } catch (err) {
      setResposta('Erro de conexão.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="chatbot-popup">
      <button className="close-btn" onClick={onClose}>×</button>
      <textarea
        placeholder="Digite sua pergunta..."
        value={pergunta}
        onChange={(e) => setPergunta(e.target.value)}
        rows={4}
      />
      <button onClick={enviarPergunta} disabled={loading}>
        {loading ? 'Carregando...' : 'Enviar'}
      </button>
      <div className="resposta-area">
        {resposta}
      </div>
    </div>
  );
}
