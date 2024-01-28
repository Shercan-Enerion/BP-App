// index.js
const express = require("express");
const app = express();
const port = 3000;

// Ruta principal que muestra "Hola, mundo!"
app.get("/", (req, res) => {
  res.send("Hola Hector!");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});