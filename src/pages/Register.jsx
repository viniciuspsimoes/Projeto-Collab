import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import '../style.css';

export default function Register() {
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const [popup, setPopup] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('Cadastrando...');
    const form = e.target;
    const payload = {
      nome: form.nome.value,
      username: form.username.value,
      email: form.email.value,
      password: form.password.value
    };

    try {
      const res = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
         setPopup({ type: 'success', message: 'Usuário cadastrado com sucesso!' });
         setTimeout(() => {
         navigate('/login');
       }, 1500); // espera 1.5s antes de redirecionar
       }
    } catch {
      setMsg('Erro no servidor');
    }
  };

  return (
    <>
      <Banner />
      <div className="login-container">
        <h2>Cadastre-se</h2>
        <form onSubmit={handleSubmit}>
          <input className="input-field" name="nome" type="text" placeholder="Nome completo" required />
          <input className="input-field" name="username" type="text" placeholder="Nome de usuário" required />
          <input className="input-field" name="email" type="email" placeholder="E-mail" required />
          <input className="input-field" name="password" type="password" placeholder="Senha" required />
          <button className="register-btn" type="submit">Cadastrar</button>
          <div className="msg">{msg}</div>
          {popup && (<div className={`popup ${popup.type}`}>{popup.message}</div>
           )}
        </form>

        <div className="signup">
          Já tem conta? <a href="/login">Entrar</a>
        </div>
      </div>
      <Footer />
    </>
  );
}