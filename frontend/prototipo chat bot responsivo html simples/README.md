# Projeto Gemini - Teste de API

Este projeto permite testar a API Gemini da Google de forma simples, com um site onde você digita um prompt e recebe uma resposta gerada pela inteligência artificial.

## ✅ O que faz

- Envia um prompt para a API Gemini (modelo `gemini-1.5-flash`)
- Exibe a resposta diretamente na tela
- Usa Node.js com Express no backend
- Frontend simples em HTML + JavaScript

## 🚀 Como usar

1. Instale as dependências:


2. No arquivo `backend/server.js`, coloque sua chave da API:

```js
const genAI = new GoogleGenerativeAI("SUA_CHAVE_AQUI");

inicie o servidor:

npm start

no navegador, digite:

http://localhost:3000
