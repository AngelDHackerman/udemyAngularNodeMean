import { Component, OnInit } from "@angular/core";
import { configuracion } from "../models/configuracion"; // ? Asi se importan las variables de otros archivos.
import { Zapatillas } from "../models/zapatilla";


@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatillas>; // ? zapatillas es de tipo array de tipo zapatillas

  constructor () {
    this.zapatillas = [
      new Zapatillas('Nike Airmax', 'Nike', 'Rojas', 190, true),
      new Zapatillas('Reebook Classic', 'Reebook', 'Blanco', 80, true), // ? Esto es una clase, un molde para las zapatillas
      new Zapatillas('Nike Runner D', 'Nike', 'Negro', 60, true),
      new Zapatillas('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
    ];
  }
  ngOnInit() {
      console.log(this.zapatillas);
  }
}
