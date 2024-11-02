import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosRepresnetanteComponent } from './dados-representante.component';

describe('DadosRepresnetanteComponent', () => {
  let component: DadosRepresnetanteComponent;
  let fixture: ComponentFixture<DadosRepresnetanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DadosRepresnetanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosRepresnetanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
