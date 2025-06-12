import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Correção do __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const usersFilePath = path.join(__dirname, 'users.json');

// Rota de registro
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    let users = [];

    try {
      const data = await fs.readFile(usersFilePath, 'utf8');
      users = JSON.parse(data);
    } catch (err) {
      // Se não existe o arquivo ainda, começa com lista vazia
      users = [];
    }

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe' });
    }

    users.push({ username, password });

    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
});

// Rota de login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const data = await fs.readFile(usersFilePath, 'utf8');
    const users = JSON.parse(data);

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao fazer login' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando: http://localhost:${PORT}`);
});
