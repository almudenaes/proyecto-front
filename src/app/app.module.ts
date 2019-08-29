import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DondeComponent } from './donde/donde.component';
import { QuienesComponent } from './quienes/quienes.component';
import { RegistroComponent } from './registro/registro.component';
import { MainComponent } from './main/main.component';
import { RequisitosComponent } from './requisitos/requisitos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    DondeComponent,
    QuienesComponent,
    RegistroComponent,
    MainComponent,
    RequisitosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
