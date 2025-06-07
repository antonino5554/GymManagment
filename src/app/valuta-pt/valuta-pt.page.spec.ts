import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValutaPtPage } from './valuta-pt.page';

describe('ValutaPtPage', () => {
  let component: ValutaPtPage;
  let fixture: ComponentFixture<ValutaPtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutaPtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
