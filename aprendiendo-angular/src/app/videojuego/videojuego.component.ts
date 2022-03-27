import { Component, OnInit } from "@angular/core";

@Component ({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html' // ? Asi es como traemos el codigo del archivo videojuego.component.html
})

export class VideojuegoComponent implements OnInit {
  public titulo: string;
  public listado: string;

  constructor (){
    this.titulo = 'Componente de videojuegos';
    this.listado = 'Listado de los juegos mas populares';

    console.log('Se ha cargado el componente: videojuego.Component.ts')
  }
  ngOnInit(): void {
    console.log('onInit ejecutado')
  }
}
