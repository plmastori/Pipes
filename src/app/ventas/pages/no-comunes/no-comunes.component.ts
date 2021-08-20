import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
 
 //i18nSelect
  nombre: string = 'Patricia';
  genero: string = 'femenino';
 
  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino' : 'invitarla'
  }

 //i18nPlural
  clientes: string [] = ['Maria','pedro','juan'];
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Cristian';
    this.genero = 'masculino';
  }

  borrarCliente(){
     this.clientes.pop();
  }

  //KeyVAlue Pipe
  persona = {
    nombre: 'Patricia',
    edad: 34,
    direccion: 'Chaco, Argentina'
  }

  //JSON Pipe
  heroes = [
    {
      nombre:'Superman',
      vuela: true
    },
    {
      nombre:'Robbin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(5000); //0,1,2,3,4,5,6,...
  
  valorPromesa = new Promise( (resolve, reject) => {
    
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
    
  });


}
