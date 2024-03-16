import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleLivro from './controle/ControleLivros'; // Substitua pelo caminho real
import ControleEditora from './controle/ControleEditora'; // Substitua pelo caminho real

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();

    const novoLivro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    controleLivro.incluirLivro(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <div className="container">
        <h1>Dados do Livro</h1>
        <form>
          <div className="form-group">
            <label htmlFor="titulo">Título:</label>
            <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor="resumo">Resumo:</label>
            <textarea className="form-control" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="autores">Autores:</label>
            <textarea className="form-control" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="codEditora">Editora:</label>
            <select className="form-control" id="codEditora" value={codEditora} onChange={tratarCombo}>
              {opcoes.map(opcao => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary" onClick={incluir}>Incluir Livro</button>
        </form>
      </div>
    </main>
  );
};

export default LivroDados;


