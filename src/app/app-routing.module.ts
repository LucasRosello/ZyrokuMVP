import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"landing", component: LandingComponent},
  {path:"stats", component: EstadisticasComponent},
  {path:"view/:id", component: ReproductorComponent},
  {path:"loguear", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
