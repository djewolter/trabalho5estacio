import { Routes } from '@angular/router';
import { LivroListaComponent } from '../app/livro-lista/livro-lista.component';
import { LivroDadosComponent } from '../app/livro-dados/livro-dados.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: LivroListaComponent },
  { path: 'dados', component: LivroDadosComponent },
  { path: '*', redirectTo: '/', pathMatch: 'full' },
  // outras rotas, se necessário
];
