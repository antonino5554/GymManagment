import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrenotaAllenamentoPage } from './prenota-allenamento.page';

describe('PrenotaAllenamentoPage', () => {
  let component: PrenotaAllenamentoPage;
  let fixture: ComponentFixture<PrenotaAllenamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenotaAllenamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
