const mongoose = require('mongoose');

// Definindo a URL de conexão com o banco de dados
const url = 'mongodb://localhost:27017/livraria';

// Opções para a conexão com o banco de dados
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true
};

// Conectando ao banco de dados
mongoose.connect(url, options)
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso'))
  .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

// Exportando o módulo 'mongoose' para ser utilizado em outros arquivos
module.exports = mongoose;
