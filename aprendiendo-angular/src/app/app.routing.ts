// * Codigo sacado de stack overflow para evitar el error con moduleWithProviders
declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;
      providers?: Provider[];
  }
}

// * Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// * Importar componentes
import { HomeComponent } from "./home/home.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";

// * Array de rutas (aqui vamos a dar de alta las rutas y configurar las rutas)

const appRoutes: Routes = [
  {path: '', component: HomeComponent}, // ? Este sera el componente que se cargara por defecto, por eso el path se deja vacio.
  {path: 'home', component: HomeComponent},
  {path: 'zapatillas', component: ZapatillasComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: '**', component: HomeComponent} // ! Esta es la ruta 404, para cuando no se encuentra la pagina
];

// * Exportar el modulo del router

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
