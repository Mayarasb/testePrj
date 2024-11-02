import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConteudoComponent } from "./Componentes/conteudo/conteudo.component";
import { PaginaUsusuarioComponent } from './Componentes/pagina-usuario/pagina-usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConteudoComponent,PaginaUsusuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testePrj';
}
