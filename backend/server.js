const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.json());

// Chave secreta para JWT - em produção, use uma chave complexa e armazene com segurança
const SECRET_KEY = 'suaChaveSecretaSuperSegura';

// Banco de dados simples em memória (em produção, use um banco de dados real)
const users = [];

// Rota de registro
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Verifica se o usuário já existe
        if (users.find(user => user.username === username)) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }
        
        // Criptografa a senha
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Armazena o usuário
        users.push({
            username,
            password: hashedPassword
        });
        
        res.status(201).json({ message: 'Usuário registrado com sucesso' });
    } catch (error) {
        res.status(500).json({ message: 'Erro no registro' });
    }
});

// Rota de login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Encontra o usuário
        const user = users.find(user => user.username === username);
        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado' });
        }
        
        // Verifica a senha
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Senha inválida' });
        }
        
        // Cria o token JWT
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Erro no login' });
    }
});

// Rota protegida (requer autenticação)
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Esta é uma rota protegida', user: req.user });
});

// Middleware de autenticação
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }
    
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = user;
        next();
    });
}

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});