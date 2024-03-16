import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css',
  imports: [ReactiveFormsModule, FormsModule],
})

export class LivroDadosComponent implements OnInit{
   editoras = [
    { codEditora: 1, nome: 'Nova tec' },
    { codEditora: 2, nome: 'Florence' },
    { codEditora: 3, nome: 'Leader' },
    // ... outras editoras
  ];
  livro = new FormGroup({
    titulo: new FormControl('', Validators.required),
    resumo:  new FormControl(''),
    codEditora:  new FormControl(''),
    autoresForm:  new FormControl(''),

  });

constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService,){}
  armazenarNome:string | null | undefined
  ngOnInit():void {
    console.log("this.numero");
  }

  updateName() {
    const livroObjeto={
      titulo: this.livro.controls['titulo'].value,
      resumo: this.livro.controls['resumo'].value,
      codEditora: this.livro.controls['codEditora'].value,
      autoresForm: this.livro.controls['autoresForm'].value,

    }
    console.log(livroObjeto);
    if (this.livro.controls['titulo'].invalid) {

       return alert("Título é obrigatório");

          }
          this.servLivros.incluir(livroObjeto)
          return alert("Livro cadastrado com sucesso");
}
}
