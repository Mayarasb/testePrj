import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConteudoComponent } from "./Componentes/conteudo/conteudo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConteudoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testePrj';
}
