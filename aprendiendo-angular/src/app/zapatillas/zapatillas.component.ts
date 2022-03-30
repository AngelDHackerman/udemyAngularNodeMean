import { Component } from "@angular/core";
import { configuracion } from "../models/configuracion"; // ? Asi se importan las variables de otros archivos.

@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent {
  public titulo: string = 'Componente de zapatillas';

}
