import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ResetearPasswordComponent } from './resetear-password/resetear-password.component';
import { CambiarPasswordComponent } from './cambiar-password/cambiar-password.component';


const routes: Routes = [
  {path:"inicio", component: InicioComponent},
  {path:"", component: LandingComponent},
  {path:"stats", component: EstadisticasComponent},
  {path:"view/:id", component: ReproductorComponent},
  {path:"loguear", component: LoginComponent},
  {path:"registrar", component: RegistrarComponent},
  {path:"resetearPassword", component: ResetearPasswordComponent},
  {path:"cambiarPassword/:token", component: CambiarPasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
