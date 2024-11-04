import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesativarUsuarioComponent } from './desativar-usuario.component';

describe('DesativarUsuarioComponent', () => {
  let component: DesativarUsuarioComponent;
  let fixture: ComponentFixture<DesativarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesativarUsuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesativarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
