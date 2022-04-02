import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public identificado: boolean;

  constructor() {
    this.identificado = false;
    // console.log(this.identificado)
   }

  ngOnInit(){

  }
  setIdentificado () {
    this.identificado = true;
    // console.log(this.identificado)
  }
  unsetIdentificado () {
    this.identificado = false;
    // console.log(this.identificado)
  }

}
