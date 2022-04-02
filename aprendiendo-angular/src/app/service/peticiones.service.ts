import { Injectable } from "@angular/core"; // * Esto se importa para poder injectar nuestros servicios en otras clases
import { HttpClient, HttpHeaders } from "@angular/common/http"; // ? Estos 2 modulos nos permitiran hacer peticiones ajax a un servicio externo, url externa y poder modificar las cabeceras de esas peticiones
import { Observable } from "rxjs";

@Injectable ()
export class PeticionesService {
  public url: string;

  constructor (
    public _http: HttpClient
  ) {
    this.url = "https://reqres.in/";
  }
  getUser (): Observable<any> {
    return this._http.get(this.url + 'api/users/2');
  }

}



