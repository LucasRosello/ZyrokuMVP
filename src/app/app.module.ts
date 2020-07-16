import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

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
import { MercadopagoComponent } from './mercadopago/mercadopago.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDesktopComponent,
    HeaderMobileComponent,
    InicioComponent,
    EstadisticasComponent,
    ReproductorComponent,
    CardMisionesComponent,
    CardInicioComponent,
    MercadopagoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
