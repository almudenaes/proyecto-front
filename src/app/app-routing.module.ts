import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabeceraComponent } from './publico/cabecera/cabecera.component';
import { RegistroComponent } from './publico/registro/registro.component';
import { MainComponent } from './publico/main/main.component';
import { LoginComponent } from './loggin/login/login.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
