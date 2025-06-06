import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizzaPtPage } from './visualizza-pt.page';

describe('VisualizzaPtPage', () => {
  let component: VisualizzaPtPage;
  let fixture: ComponentFixture<VisualizzaPtPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaPtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
