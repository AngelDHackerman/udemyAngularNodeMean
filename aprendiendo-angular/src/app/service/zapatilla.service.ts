import { Injectable } from "@angular/core"; // * Esto se importa para poder injectar nuestros servicios en otras clases
import { Zapatillas } from "../models/zapatilla";

@Injectable()
export class ZapatillaService {
  public zapatillas: Array<Zapatillas>;

  constructor () {
    new Zapatillas('Nike Airmax', 'Nike', 'Rojas', 40, true),
    new Zapatillas('Reebook Classic', 'Reebook', 'Blanco', 80, true),
    new Zapatillas('Reebook Spartan', 'Reebook', 'Negra', 180, true),
    new Zapatillas('Nike Runner MD', 'Nike', 'Negras', 60, true),
    new Zapatillas('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
  }

  getTexto () {
    return "hola mundo desde un servicio";
  }

  getZapatillas (): Array<Zapatillas> {
    return this.zapatillas
  }
}
