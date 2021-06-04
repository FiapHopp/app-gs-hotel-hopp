import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components//header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListaHoteisComponent } from './components/lista-hoteis/lista-hoteis.component';
import { HotelSelecionadoComponent } from './components/hotel-selecionado/hotel-selecionado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListaHoteisComponent,
    HotelSelecionadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
