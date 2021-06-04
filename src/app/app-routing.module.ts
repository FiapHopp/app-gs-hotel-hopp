import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelSelecionadoComponent } from './components/hotel-selecionado/hotel-selecionado.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'hotel-selecionado', component: HotelSelecionadoComponent },    
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
