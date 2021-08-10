const express = require("express");
const controlador = require('./controlador/control')
const rotas = express();

rotas.get("/empresas/:dominioEmpresa", controlador.buscarEmpresa);

module.exports = rotas;