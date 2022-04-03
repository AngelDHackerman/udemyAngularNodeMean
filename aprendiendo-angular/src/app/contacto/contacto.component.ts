import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contactoUsuario';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.sass']
})
export class ContactoComponent implements OnInit {
  public usuario: ContactoUsuario;

  constructor() {
    this.usuario = new ContactoUsuario('', '', '', '')
  }

  ngOnInit(): void {
  }
  onSubmit () {
    console.log('Evento submit lanzado!!!');
    console.log(this.usuario)
  }

}
