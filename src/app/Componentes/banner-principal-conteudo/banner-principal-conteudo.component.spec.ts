import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPrincipalConteudoComponent } from './banner-principal-conteudo.component';

describe('BannerPrincipalConteudoComponent', () => {
  let component: BannerPrincipalConteudoComponent;
  let fixture: ComponentFixture<BannerPrincipalConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPrincipalConteudoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPrincipalConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
