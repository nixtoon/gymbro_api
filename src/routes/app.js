const express = require('express');
const app = express.Router();
const usuario = require('../controller/route_usuario')
const ejercicio = require('../controller/route_ejercicio')

app.post('/agregar-usuario', usuario.addUsuario)
app.get('/listar-usuarios', usuario.listarUsuarios)
app.post('/login', usuario.login)
app.post('/agregar-ejercicio', ejercicio.addEjercicio)
app.get('/listar-ejercicios', ejercicio.listarEjercicios)

module.exports = app;