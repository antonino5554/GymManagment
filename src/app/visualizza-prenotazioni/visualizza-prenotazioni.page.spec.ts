import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizzaPrenotazioniPage } from './visualizza-prenotazioni.page';

describe('VisualizzaPrenotazioniPage', () => {
  let component: VisualizzaPrenotazioniPage;
  let fixture: ComponentFixture<VisualizzaPrenotazioniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaPrenotazioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
