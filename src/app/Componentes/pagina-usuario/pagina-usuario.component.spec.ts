import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaUsusuarioComponent } from './pagina-usuario.component';

describe('PaginaUsusuarioComponent', () => {
  let component: PaginaUsusuarioComponent;
  let fixture: ComponentFixture<PaginaUsusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaUsusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaUsusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
