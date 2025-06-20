import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../style.css';

export default function Login() {
  const [popup, setPopup] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        localStorage.setItem('isLoggedIn', 'true');
        setPopup({ type: 'success', message: 'Login realizado com sucesso!' });

        setTimeout(() => {
          navigate('/age-born');
        }, 1500); // espera 1.5 segundos antes de redirecionar
      } else {
        setPopup({ type: 'error', message: 'Usuário ou senha inválidos.' });
      }
    } catch {
      setPopup({ type: 'error', message: 'Erro no servidor.' });
    }
  };

  return (
    <>
      <Banner />

      {/* POPUP DINÂMICO */}
      {popup && (
        <div className={`popup ${popup.type}`}>
          {popup.message}
        </div>
      )}

      <div className="login-container">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmit}>
          <input className="input-field" name="username" type="text" placeholder="Nome de usuário" required />
          <input className="input-field" name="password" type="password" placeholder="Senha" required />

          <div className="forgot-password">
            <a href="#">Esqueci minha senha</a>
          </div>

          <button className="login-btn" type="submit">Entrar</button>
        </form>

        <div className="signup">
          Não tem conta? <a href="/register">Cadastre-se</a>
        </div>
      </div>

      <Footer />
    </>
  );
}