import { Injectable } from "@angular/core"; // * Esto se importa para poder injectar nuestros servicios en otras clases
import { HttpClient, HttpHeaders } from "@angular/common/http"; // ? Estos 2 modulos nos permitiran hacer peticiones ajax a un servicio externo, url externa y poder modificar las cabeceras de esas peticiones
import { Observable } from "rxjs";

@Injectable ()
export class PeticionesService {

  constructor (
    public _http: HttpClient
  ) {}
}



