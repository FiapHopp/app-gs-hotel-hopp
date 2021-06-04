import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-selecionado',
  templateUrl: './hotel-selecionado.component.html',
  styleUrls: ['./hotel-selecionado.component.css']
})
export class HotelSelecionadoComponent implements OnInit {

  router: Router;
  hotelSelecionado: any;

  constructor(router: Router){
    this.router = router;
  }

  ngOnInit(): void {        
    this.hotelSelecionado = history.state.data;    
  }

  voltar(){
    this.router.navigate(['inicio']);    
  }
}
