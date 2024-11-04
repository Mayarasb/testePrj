import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DadosInstituicaoComponent } from '../dados-instituicao/dados-instituicao.component';
import { FooterComponent } from '../footer/footer.component';
import { DadosRepresentanteComponent } from '../dados-representante/dados-representante.component';
import { DesativarUsuarioComponent } from '../desativar-usuario/desativar-usuario.component';

@Component({
  selector: 'app-pagina-usuario',
  standalone: true,
  imports: [HeaderComponent, DadosInstituicaoComponent, FooterComponent, DadosRepresentanteComponent, DesativarUsuarioComponent],
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.css'
})
export class PaginaUsusuarioComponent {

}
