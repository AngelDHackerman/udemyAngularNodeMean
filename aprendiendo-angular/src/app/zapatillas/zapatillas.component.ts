import { Component, OnInit } from "@angular/core";
import { configuracion } from "../models/configuracion"; // ? Asi se importan las variables de otros archivos.
import { Zapatillas } from "../models/zapatilla";
import { ZapatillaService } from "../service/zapatilla.service";


@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  providers: [ZapatillaService], // ?Asi podemos usar el zapatillas service que importamos arriba
})

export class ZapatillasComponent implements OnInit{
  public titulo: string = 'Componente de zapatillas';
  public zapatillas: Array<Zapatillas>; // ? zapatillas es de tipo array de tipo zapatillas
  public marcas: String[];
  public color: string;
  public mi_marca: string;

  constructor (
    private _zapatillaService: ZapatillaService
  ) {
    this.zapatillas = [
      new Zapatillas('Nike Airmax', 'Nike', 'Rojas', 190, true),
      new Zapatillas('Reebook Classic', 'Reebook', 'Blanco', 80, true), // ? Esto es una clase, un molde para las zapatillas
      new Zapatillas('Rebook Spartan', 'Reebook', 'Negra', 180, true),
      new Zapatillas('Nike Runner D', 'Nike', 'Negro', 60, true),
      new Zapatillas('Adidas Yezzy', 'Adidas', 'Gris', 180, false)
    ];
    this.marcas = new Array;
    this.color = 'yellow';
    this.mi_marca = 'Angel\'s shoes';
  }
  ngOnInit() {
      this._zapatillaService.getZapatillas();
      // alert(this._zapatillaService.getTexto());
      this.getMarcas();
  }

  getMarcas () {
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcas.indexOf(zapatilla.marca) < 0) { // ? Si el elemento buscado por indexOf dentro de zapatilla.marca == 0, (osea no existe y es primera ver que pasa por el indexOf)
        this.marcas.push(zapatilla.marca); // ? si no existe pues le damos push, si en dado caso ya existe no le dara push.
      }
    });
    console.log(this.marcas);
  }
  getMarca () {
    alert(this.mi_marca)
  }
  addMarca () {
    this.marcas.push(this.mi_marca)
  }
  borrarMarca (index: number) {
    // delete this.marcas[index]
    this.marcas.splice(index, 1) // * splice borra (index: el indice donde empieza, n: cuantos se borraran(en este caso solo 1))
  }
  onBlur () {
    console.log('has salido del input')
  }
}
