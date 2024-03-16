// LivroLista.js
import React, { useState, useEffect } from "react";
import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";

const LivroLista = () => {
  const controleLivro = new ControleLivro();
  const controleditora = new ControleEditora();
  const [livros, setLivros] = useState([]);
  // const [carregado, setCarregado] = useState(false);

  useEffect(() => {
   controleLivro.obterLivros().then(livros => setLivros(livros))
   
  }, []);

  const getNomeEditora = (codigo) => {
    const nome = controleditora.getNomeEditora(codigo);
    return nome;
  };

  const excluir = (codigo) => {
    controleLivro.excluirLivro(codigo);
    window.location.reload()
    // setCarregado(false);
  };


  const SubItem = ({ subItem }) => (
    <li>{subItem}</li>
  );

  const Item = ({ item }) => (
    <div>
      <ul>
        {item.map((subItem, index) => (
          <SubItem key={index} subItem={subItem} />
        ))}
      </ul>
    </div>
  );




  return (
    <main>
      <div className="contener">
      <h1>Catálogo de livros</h1>
      <table className="table table-hover">
      <thead className="thead-custom">
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Resumo</th>
            <th scope="col">Editora</th>
            <th scope="col">Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros?.map((livro, index) => {
            const nomeEditora = getNomeEditora(livro.codEditora);
            return (
              <tr key={livro._id}>
                <td className="td-titulo">{livro.titulo} <button
                    type="button"
                    className="btn btn-danger btn-sm td-button"
                    onClick={() => excluir(livro._id)}
                  >
                    Excluir
                  </button></td>
                <td>{livro.resumo}</td>
                <td>{nomeEditora}</td>
                {/* <td>{livro.autores}</td> */}
                <td ><Item key={index} item={livro.autores} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </main>
  );
};

export default LivroLista;
