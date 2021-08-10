const express = require("express");
const { localizarIp, verVotos } = require("./controlador/control");
const rotas = express();

rotas.post("/votacao/:pais/:ip", localizarIp);
rotas.get("/votacao", verVotos);

module.exports = rotas;