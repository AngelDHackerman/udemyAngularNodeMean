import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'; // * Esto es necesario para recojer nombres de la url

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  public nombre: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit () {
    this._route.params.subscribe((params: Params) => {  // ? El metodo subscribe sirve para recojer el nombre pasado por la url.
      this.nombre = params['nombre'];
      console.log(this.nombre)
    })
  }

}
