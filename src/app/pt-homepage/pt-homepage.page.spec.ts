//importa le funzionalità necessarie ad Angular
import { ComponentFixture, TestBed } from '@angular/core/testing'; //permette di creare un ambiente di test 
import { PtHomepagePage } from './pt-homepage.page';               //permette di accedere al componente che vogliamo testare

//definisce un insieme di test per la pagina
describe('PtHomepagePage', () => {
  let component: PtHomepagePage;                  //oggetto pagina
  let fixture: ComponentFixture<PtHomepagePage>;  //serve per testare tutto insieme unendo l'oggetto e HTML

  //eseguito prima di ogni test
  beforeEach(() => {
    fixture = TestBed.createComponent(PtHomepagePage); //crea il componente da testare in un ambiente isolato
    component = fixture.componentInstance;
    fixture.detectChanges();                           //esegue il ciclo di vita del componente
  });

  //verifica che il componente sia stato creato correttamente: che esista e sia funzionante
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
