import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PtHomepagePage } from './pt-homepage.page';

describe('PtHomepagePage', () => {
  let component: PtHomepagePage;
  let fixture: ComponentFixture<PtHomepagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PtHomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
