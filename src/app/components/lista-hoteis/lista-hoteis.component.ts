import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-hoteis',
  templateUrl: './lista-hoteis.component.html',
  styleUrls: ['./lista-hoteis.component.css']
})
export class ListaHoteisComponent implements OnInit {

  listaHoteis: any;
  router: Router;
  constructor(router: Router){
    this.router = router;
  }

  ngOnInit(): void {
    this.listarHoteis();
  }

  listarHoteis() {
    this.listaHoteis = [
      {
        descricao: "IBISS Styles São Paulo Anhembi",
        valor: 170,
        telefone: "4673-0255",
        ddd: "11",
        cidade: "São Paulo",
        uf: "SP",        
        cep: "04515-001",
        logradouro: "Av. Sabiá",
        bairro: "Indiánopolis",
        numero_logradouro: "825",
        qtd_estrelas: "5"
      },
      {
        descricao: "Comfort Ibirapuera",
        valor: 192,
        telefone: "5863-0888",
        ddd: "11",
        cidade: "São Paulo",
        uf: "SP",        
        cep: "04445-002",
        logradouro: "Av. Paulista",
        bairro: "Bela Vista",
        numero_logradouro: "1000",
        qtd_estrelas: "2"
      },
      {
        descricao: "Blue Tree Premium Morumbi",
        valor: 260,
        telefone: "9998-0775",
        ddd: "11",
        cidade: "São Paulo",
        uf: "SP",        
        cep: "03563-000",
        logradouro: "Av. Doutor Pereira Vergueiro",
        bairro: "Tatuapé",
        numero_logradouro: "89",
        qtd_estrelas: "3"
      }      
    ];
  }

  selecionarHotel(hotel:any){
    this.router.navigate(['hotel-selecionado'], { state: {data: hotel} });    
  }
}
