//e.g server.js
import express from "express";
import ViteExpress from "vite-express";

// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;
const app = express();

app.get("/message", (_, res) => res.send("Cambiando texto!"));

ViteExpress.listen(app, port, () => console.log("Server is listening..."));