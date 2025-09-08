const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir home.html
app.get("/", (req, res) => {
  // Captura IP (prioriza X-Forwarded-For para quando estiver em hospedagem)
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  
  console.log(`Novo acesso - IP: ${ip}`);

  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
