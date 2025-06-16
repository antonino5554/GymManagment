import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizzaAllenamentiPage } from './visualizza-allenamenti.page';

describe('VisualizzaAllenamentiPage', () => {
  let component: VisualizzaAllenamentiPage;
  let fixture: ComponentFixture<VisualizzaAllenamentiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaAllenamentiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
