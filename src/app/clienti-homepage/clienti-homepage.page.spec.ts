import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientiHomePage } from './clienti-homepage.page';

describe('ClientiHomepagePage', () => {
  let component: ClientiHomePage;
  let fixture: ComponentFixture<ClientiHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientiHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
