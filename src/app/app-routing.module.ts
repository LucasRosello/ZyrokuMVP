import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"stats", component: EstadisticasComponent},
  {path:"view", component: ReproductorComponent},
  {path:"loguear", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
