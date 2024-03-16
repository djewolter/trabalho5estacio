// Importe as classes necessárias do Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// Decorator @Component com metadados corretos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, CommonModule,RouterModule], // Adicione os imports necessários aqui

  standalone: true // Adicione esta linha para indicar que o componente é independente
})
export class AppComponent {
  title = 'livros-angular';
}
