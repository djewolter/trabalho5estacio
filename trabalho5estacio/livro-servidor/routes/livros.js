const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

// Rota para obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter os livros.' });
  }
});

// Rota para incluir um novo livro
router.post('/', async (req, res) => {
    console.log(req.body);
  try {
    const novoLivro = req.body;
    await incluir(novoLivro);
    res.json({ message: 'Livro incluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao incluir o livro.' });
  }
});

// Rota para excluir um livro pelo código
router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    await excluir(codigo);
    res.json({ message: 'Livro excluído com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir o livro.' });
  }
});

module.exports = router;
