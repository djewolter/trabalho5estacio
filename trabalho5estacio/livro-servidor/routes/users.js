const express = require('express');
const router = express.Router();

// Rota para obter todos os usuários
router.get('/', function(req, res, next) {
  res.send('Lista de usuários');
});

// Rota para criar um novo usuário
router.post('/', function(req, res, next) {
  res.send('Novo usuário criado');
});

// Rota para atualizar um usuário existente
router.put('/:id', function(req, res, next) {
  res.send('Usuário atualizado: ' + req.params.id);
});

// Rota para excluir um usuário pelo ID
router.delete('/:id', function(req, res, next) {
  res.send('Usuário excluído: ' + req.params.id);
});

module.exports = router;
