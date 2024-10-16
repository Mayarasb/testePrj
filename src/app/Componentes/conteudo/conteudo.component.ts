import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { BannerPrincipalConteudoComponent } from "../banner-principal-conteudo/banner-principal-conteudo.component";
import { FooterComponent } from '../footer/footer.component';
import { BannerResultadosComponent } from '../banner-resultados/banner-resultados.component';


@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [HeaderComponent, NoticiasComponent, BannerPrincipalConteudoComponent, BannerResultadosComponent,FooterComponent],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {

}
