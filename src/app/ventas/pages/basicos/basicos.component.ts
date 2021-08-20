import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'patricia';  
  nombreUpper: string = 'PATRICIA';  
  nombreCompleto: string = 'PAtRiCia MAStOri';  

  fecha: Date = new Date(); //dia de hoy

}
