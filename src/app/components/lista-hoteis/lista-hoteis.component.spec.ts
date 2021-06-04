import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHoteisComponent } from './lista-hoteis.component';

describe('ListaHoteisComponent', () => {
  let component: ListaHoteisComponent;
  let fixture: ComponentFixture<ListaHoteisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaHoteisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHoteisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
