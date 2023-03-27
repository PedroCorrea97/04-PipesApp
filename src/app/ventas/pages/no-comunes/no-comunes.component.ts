import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  //i18nselect
  nombre: string = 'pedro';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string [] = ['María', 'Pedro', 'Juan', 'Irving', 'Felipe'];
  clienteMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.nombre = "Melissa";
    this.genero = "femenino"
  }

  borrarCliente() {
    this.clientes.pop();
  }


  // KeyValue Pipe
  persona = {
    nombre: 'Pedro',
    edad: 24,
    direccion: "Xalapa, Veracruz.  México"
  }

  // JSON Pipe
  heroes = [
    {
      nombre: 'The Flash',
      vuela: false
    },
    {
      nombre: 'Green Lantern',
      vuela: true
    },
    {
      nombre: 'Iron Man',
      vuela: true
    }
  ]

  // Async Pipe
  miObservable = 
}
