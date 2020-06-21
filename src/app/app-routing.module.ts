import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ReproductorComponent } from './reproductor/reproductor.component';


const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"stats", component: EstadisticasComponent},
  {path:"view", component: ReproductorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
