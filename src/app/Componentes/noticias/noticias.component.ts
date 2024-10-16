import { Component } from '@angular/core';
import { Categoriasnoticiasnoticias } from '../../models/categoriasnoticiasnoticias';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

  categorias : Categoriasnoticiasnoticias[] = [
    {image: '/img/Conteudo/fome_brasil-conteudo(P).jpg', title:'Cenário da fome em Votorantim', description:'A fome é uma realidade que assola diversas regiões do Brasil, incluindo cidades de pequeno e médio porte como Votorantim, localizada no interior do estado de São Paulo. Em um cenário nacional onde a insegurança alimentar afeta milhões de brasileiros, é crucial entender tanto o panorama...',button:'Leia Mais'},
    {image: '/img/Conteudo/alimentos_naopereciveis-conteudo(p).JPG', title:'Alimentos não perecíveis', description:'Alimentos não perecíveis são produtos que têm uma longa vida útil e não estragam facilmente, mesmo sem refrigeração. Exemplos comuns incluem enlatados, grãos, massas, arroz e alimentos desidratados. Eles são essenciais em programas de assistência alimentar e em situações de emergência.',button:'Leia Mais'},
    {image: '/img/Conteudo/doacaoAlimentos-conteudo(P).jpg', title:'A importância da doação de alimentos e seus impactos na sociedade', description:'A doação de alimentos desempenha um papel crucial na promoção da equidade social e na mitigação da fome e da insegurança alimentar. Em um mundo onde a produção de alimentos é abundante, mas sua distribuição é desigual, iniciativas de doação de alimentos emergem como ferramentas essenciais para garantir que todos tenham acesso a uma nutrição adequada...',button:'Leia Mais'}
    

  ]

  }

