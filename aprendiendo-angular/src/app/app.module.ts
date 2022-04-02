import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ! importante importar esto para que los ngModel funcionen.
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http'; // ! importante para trabajar con las peticiones ajax

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   // ! Esto va junto con la importancion de los module para los ngModels
    routing,
    HttpClientModule // ! Esto va junto con la importacion de httpClientModule para las peticiones ajax.
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
