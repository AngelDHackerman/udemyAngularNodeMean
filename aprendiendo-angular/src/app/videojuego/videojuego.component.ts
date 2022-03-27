import { Component, OnInit, DoCheck } from "@angular/core";

@Component ({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html' // ? Asi es como traemos el codigo del archivo videojuego.component.html
})

export class VideojuegoComponent implements OnInit, DoCheck{
  public titulo: string;
  public listado: string;

  constructor (){
    this.titulo = 'Componente de videojuegos';
    this.listado = 'Listado de los juegos mas populares';

    console.log('Se ha cargado el componente: videojuego.Component.ts')
  }
  ngOnInit(): void {      // ? Este metodo se ejecuta cada que se ejecuta el componente.
    console.log('onInit ejecutado')
  }
  ngDoCheck(): void { // ? Se ejecuta cada que se ejecuta un cambio en el componente o en la aplicacion de angular.
    console.log('DoCheck ejecutado')
  }
  cambiarTitulo () {
    this.titulo = 'Nuevo titulo del componente';
  }
}
