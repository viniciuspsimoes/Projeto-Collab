import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../style.css';

export default function Login() {
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('Verificando...');
    const form = e.target;
    const payload = {
      username: form.username.value,
      password: form.password.value
    };

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        navigate('/');
      } else {
        const text = await res.text();
        setMsg(text);
      }
    } catch {
      setMsg('Erro no servidor');
    }
  };

  return (
    <>
      <Banner />
      <div className="login-container">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <input className="input-field" name="username" type="text" placeholder="Nome de usuário" required />
          <input className="input-field" name="password" type="password" placeholder="Senha" required />

          {/* Link Esqueci a senha */}
          <div className="forgot-password">
            <a href="#">Esqueci minha senha</a>
          </div>

          <button className="login-btn" type="submit">Entrar</button>
          <div className="msg">{msg}</div>
        </form>

        <div className="signup">
          Não tem conta? <a href="/register">Cadastre-se</a>
        </div>
      </div>
      <Footer />
    </>
  );
}