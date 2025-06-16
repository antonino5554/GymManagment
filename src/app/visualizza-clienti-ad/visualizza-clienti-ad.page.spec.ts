import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizzaClientiAdPage } from './visualizza-clienti-ad.page';

describe('VisualizzaClientiAdPage', () => {
  let component: VisualizzaClientiAdPage;
  let fixture: ComponentFixture<VisualizzaClientiAdPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaClientiAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
