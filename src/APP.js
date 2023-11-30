const express = require("express");
const app = express();
const path = require("path");

// Defina a pasta de conteúdo estático (onde estão os arquivos HTML, JS, CSS, etc.)
app.use(express.static(path.join(__dirname, "C:\Users\guihe\Documents\.vscode\programação_front_1")));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "C:\Users\guihe\Documents\.vscode\programação_front_1", "index.html"));
});

// Inicie o servidor na porta 3000 (ou a porta que você preferir)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});