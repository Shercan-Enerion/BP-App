// index.js
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

// Ruta principal que muestra "Hola, mundo!"
app.get("/BP-App-front", (req, res) => {
  res.send("Vamos por toda");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
