import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderDesktopComponent } from './header-desktop/header-desktop.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';
import { InicioComponent } from './inicio/inicio.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { CardMisionesComponent } from './card-misiones/card-misiones.component';
import { CardInicioComponent } from './card-inicio/card-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    InicioComponent,
    EstadisticasComponent,
    ReproductorComponent,
    CardMisionesComponent,
    CardInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
