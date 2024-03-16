const express = require('express');
const path = require('path');
const cors = require('cors'); // Importe o módulo CORS
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Importe os roteadores
// const indexRouter = require('./index');
const usersRouter = require('./users');
const livroRouter = require('./livros'); // Importe o roteador de livros

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure o CORS
app.use(cors());

// Defina as rotas
// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/livros', livroRouter); // Adicione a rota de livros

module.exports = app;
