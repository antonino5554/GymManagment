import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualizzaPtAdminPage } from './visualizza-pt-admin.page';

describe('VisualizzaPtAdminPage', () => {
  let component: VisualizzaPtAdminPage;
  let fixture: ComponentFixture<VisualizzaPtAdminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaPtAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
