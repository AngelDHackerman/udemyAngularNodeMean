import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.sass'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;
  public fecha: any;

  public new_user: any;

  constructor(
    private _peticionesService: PeticionesService
  ) {
    this.userId = 2;
    this.new_user = {
      "name": "",
      "job": ""
    }
   }

  ngOnInit() {

    this.fecha = new Date ();

    this.cargaUsuario();
  }

  cargaUsuario () {
    this.user = false;
    this._peticionesService.getUser().subscribe(// ? subscribe tiene 2 callbacks. result y error.
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
