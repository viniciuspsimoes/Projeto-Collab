const express = require('express');
const path = require('path');
const fetch = require('node-fetch'); // Instale com: npm install node-fetch
const app = express();
const cors = require('cors');

const allowedOrigins = ['http://localhost:5500', 'http://127.0.0.1:5500'];

//app.use(cors());  permite todas origens
app.use(cors({
  origin: function(origin, callback) {
    // Permite requisições sem origem (ex: Postman) e as da lista
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Origem não permitida pelo CORS'));
    }
  }
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Proxy para o Google Apps Script
app.post('/register', async (req, res) => {
  try {
    const querystring = new URLSearchParams(req.body).toString();
    const response = await fetch('https://script.google.com/macros/s/AKfycbz76StN77DbB80sxZrQRQQZFgTia5SrkLpnEdLXMaL9RpYlyV-GFCtkSSmttn-iFl1x/exec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: querystring
    });

    const text = await response.text();
    res.send(text); // responde de volta ao navegador
  } catch (err) {
    console.error('Erro no proxy:', err);
    res.status(500).send('Erro no servidor proxy.');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
