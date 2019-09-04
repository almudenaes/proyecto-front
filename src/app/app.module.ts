import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './publico/cabecera/cabecera.component';
import { DondeComponent } from './publico/donde/donde.component';
import { QuienesComponent } from './publico/quienes/quienes.component';
import { RegistroComponent } from './publico/registro/registro.component';
import { MainComponent } from './publico/main/main.component';
import { RequisitosComponent } from './publico/requisitos/requisitos.component';
import { FooterComponent } from './footer/footer.component';
import { BodyUserComponent } from './user/body-user/body-user.component';
import { LoginComponent } from './loggin/login/login.component';
import { DatosUserComponent } from './user/datos-user/datos-user.component';
import { CalendarioComponent } from './user/calendario/calendario.component';
import { DondeUserComponent } from './user/donde-user/donde-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    DondeComponent,
    QuienesComponent,
    RegistroComponent,
    MainComponent,
    RequisitosComponent,
    FooterComponent,
    BodyUserComponent,
    LoginComponent,
    DatosUserComponent,
    CalendarioComponent,
    DondeUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
