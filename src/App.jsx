import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

// Novas páginas de primeiro acesso
import AgeBorn from './pages/onboarding/age-born';
import UniversityCourse from './pages/onboarding/university-course';
import GenderArea from './pages/onboarding/gender-area';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rotas existentes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Novas rotas de primeiro acesso */}
        <Route path="/age-born" element={<AgeBorn />} />
        <Route path="/university-course" element={<UniversityCourse />} />
        <Route path="/gender-area" element={<GenderArea />} />

        {/* Qualquer outra rota redireciona para login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;