const banco = require('./conexao');

// Definindo a estrutura do banco de dados para Livros
const LivroSchema = new banco.Schema({

    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String],
});

// Associando LivroSchema à coleção livros
const Livro = banco.model('livros', LivroSchema);

// Exportando o modelo Livro para ser utilizado em outros arquivos
module.exports = Livro;
