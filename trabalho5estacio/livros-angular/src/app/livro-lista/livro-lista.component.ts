// src/app/livro-lista/livro-lista.component.ts

import { Component, OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';


@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {
  public editoras: Array<Editora> = [];
  public livros: any = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService,) { }

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    // this.livros = this.servLivros.obterLivros();
   // this.livros = this.servLivros.obterLivros();
   this.servLivros.obterLivros().subscribe({
    next: (livros) => {
      this.livros = livros;
      console.log(this.livros);
    },
    error: (error) => {
      console.error('Erro ao obter os livros:', error);
    }
  });
}
     

  excluir = (codigo: string): void => {


    
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }

  obterNome = (codEditora: number): string | undefined => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
