import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaAllenamentoPage } from './crea-allenamento.page';

describe('CreaAllenamentoPage', () => {
  let component: CreaAllenamentoPage;
  let fixture: ComponentFixture<CreaAllenamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaAllenamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
