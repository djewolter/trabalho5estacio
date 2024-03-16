import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MongoService {
baseURL = "http://localhost:3030/livros";

  constructor() { }

  async obterLivros(): Promise<any> {
    try {
      const response = await fetch(this.baseURL, {
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

}
