import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSelecionadoComponent } from './hotel-selecionado.component';

describe('HotelSelecionadoComponent', () => {
  let component: HotelSelecionadoComponent;
  let fixture: ComponentFixture<HotelSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelSelecionadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
