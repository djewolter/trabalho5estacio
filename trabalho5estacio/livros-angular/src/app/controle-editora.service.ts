import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  baseURL = "http://localhost:3030/livros";
  private editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Nova tec' },
    { codEditora: 2, nome: 'Florence' },
    { codEditora: 3, nome: 'Leader' }
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editoraEncontrada = this.editoras.find(e => e.codEditora === codEditora);
    return editoraEncontrada ? editoraEncontrada.nome : undefined;
  }
}
