import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'aprendiendo-angular';
  public  mostrar_videojuegos: boolean = true;

  ocultarVideojuegos (value: boolean) {
    this.mostrar_videojuegos = value;
  }

}
