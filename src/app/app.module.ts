import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './publico/cabecera/cabecera.component';
import { DondeComponent } from './publico/donde/donde.component';
import { QuienesComponent } from './publico/quienes/quienes.component';
import { RegistroComponent } from './publico/registro/registro.component';
import { MainComponent } from './publico/main/main.component';
import { RequisitosComponent } from './publico/requisitos/requisitos.component';
import { FooterComponent } from './footer/footer.component';
import { CabeceraUserComponent } from './user/cabecera-user/cabecera-user.component';
import { BodyUserComponent } from './user/body-user/body-user.component';
import { LoginComponent } from './loggin/login/login.component';

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
    CabeceraUserComponent,
    BodyUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
