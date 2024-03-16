// ControleLivros.ts
import Livro from '../modelo/Livro';
const baseURL = "http://localhost:3030/livros";

const livros: Array<Livro> = [
  new Livro(1, 1, 'Livro 1', 'Resumo 1', ['Autor 1', 'Autor 2']),
  new Livro(2, 2, 'Livro 2', 'Resumo 2', ['Autor 3']),
  new Livro(3, 3, 'Livro 3', 'Resumo 3', ['Autor 4', 'Autor 5']),
];

class ControleLivro {
  public async obterLivros(): Promise<any>{
    try {
      const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error('Erro ao obter os livros');
      }
  
      const data = await response.json();
      return data; // Retorna os dados como um array de livros
    } catch (error) {
      console.error('Erro:', error);
      return []; // Retorna um array vazio em caso de erro
    }
    
  }
  public async  incluirLivro(livro: Livro): Promise<void> {
    try {
      const resposta = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao incluir o livro");
      }

    } catch (error) {
      console.error("Erro ao incluir o livro:", error);
    }
    const codigo = Math.max(0, ...livros.map(l => l.codigo)) + 1;
    livro.codigo = codigo;
    livros.push(livro);
  }

  public async excluirLivro(codigo: number): Promise<void>  {
  //   const index = livros.findIndex(l => l.codigo === codigo);
  //   if (index !== -1) {
  //     livros.splice(index, 1);
  //   }
  // }
  try {
    const resposta = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });

    if (!resposta.ok) {
      throw new Error('Erro ao excluir o livro');
    }

    // Recarrega a página após a exclusão
    window.location.reload();
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
  }

}
}

export default ControleLivro;

