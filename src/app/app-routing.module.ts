import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent } from './publico/cabecera/cabecera.component';
import { RegistroComponent } from './publico/registro/registro.component';
import { MainComponent } from './publico/main/main.component';
import { LoginComponent } from './loggin/login/login.component';
import { DatosUserComponent } from './user/datos-user/datos-user.component';
import { BodyUserComponent } from './user/body-user/body-user.component';
import { CalendarioComponent } from './user/calendario/calendario.component';
import { DondeUserComponent } from './user/donde-user/donde-user.component';
import { DondeComponent } from './publico/donde/donde.component';
import { QuienesComponent } from './publico/quienes/quienes.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'home', component: MainComponent },
  { path: 'donde', component: DondeComponent },
  { path: 'quien', component: QuienesComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: BodyUserComponent },
  { path: 'user/datos', component: DatosUserComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'dondeuser', component: DondeUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
