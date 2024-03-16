const Livro = require('./livro-schema');


// Função para obter todos os livros
const obterLivros = async () => {
  try {
    return await Livro.find();
  } catch (error) {
    console.error('Erro ao obter os livros:', error);
    throw error;
  }
};

// Função para incluir um novo livro
const incluir = async (livro) => {
  try {
    return await Livro.create(livro);
  } catch (error) {
    console.error('Erro ao incluir o livro:', error);
    throw error;
  }
};

// Função para excluir um livro pelo código
const excluir = async (codigo) => {
  try {
    return await Livro.deleteOne({ _id: codigo });
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
    throw error;
  }
};

// Exportando as funções definidas no padrão de módulo
module.exports = {
  obterLivros,
  incluir,
  excluir
};
