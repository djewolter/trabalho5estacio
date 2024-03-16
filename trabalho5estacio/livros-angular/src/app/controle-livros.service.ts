import { Injectable } from '@angular/core';
import { Livro } from './livro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  baseURL = "http://localhost:3030/livros";
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro 1', resumo: 'Resumo do Livro 1', autores: ['Autor 1', 'Autor 2'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro 2', resumo: 'Resumo do Livro 2', autores: ['Autor 3', 'Autor 4'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro 3', resumo: 'Resumo do Livro 3', autores: ['Autor 5', 'Autor 6'] }
  ];

  obterLivros(): Observable<any[]> {
    return new Observable<any[]>((observer) => {
      fetch(this.baseURL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao obter os livros');
          }
          return response.json();
        })
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          console.error('Erro:', error);
          observer.error(error);
        });
    });
  }

  async incluir(livro: any): Promise<void> {
    console.log("Livro a ser incluído:", livro);

    try {
      const resposta = await fetch(this.baseURL, {
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

  }

  async excluir(codigo: string): Promise<void> {

    try {
      const resposta = await fetch(`${this.baseURL}/${codigo}`, {
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

    // // Encontrar o índice do livro com o código fornecido
    // const index = this.livros.findIndex(l => l.codigo === codigo);
    // // Remover o livro usando splice
    // if (index !== -1) {
    //   this.livros.splice(index, 1);
    // }
  }
}
