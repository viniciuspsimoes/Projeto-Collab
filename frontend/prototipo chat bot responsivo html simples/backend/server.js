import express from 'express';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

const app = express();
const PORT = 3000;

// ✅ SUA CHAVE DA API:
const genAI = new GoogleGenerativeAI("AIzaSyDkYzU3J0P_-EP1nCxgyjLhJNfEdtS3KMU");

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

app.post('/api/perguntar', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === "") {
    return res.status(400).json({ erro: 'Prompt não pode ser vazio.' });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return res.json({ resposta: text });
  } catch (error) {
    console.error("❌ Erro ao chamar a API do Gemini:");
    console.error(error);

    // Verifica se é erro da API
    if (error.message.includes("API key expired")) {
      return res.status(401).json({ erro: "Chave da API expirada." });
    }

    return res.status(500).json({ erro: "Erro ao gerar resposta com a API Gemini. Tente novamente." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
