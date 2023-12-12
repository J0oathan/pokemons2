import { Component } from '@angular/core';

@Component({
  selector: 'app-evolutions-pkms',
  templateUrl: './evolutions-pkms.component.html',
  styleUrls: ['./evolutions-pkms.component.css']
})
export class EvolutionsPkmsComponent {
  hola:number = 2;

  constructor() {}
  ngOnInit() {
    console.log("En este instante el componente ha cargado");
  }

  generateRamdon():String {
    return Math.floor(Math.random()*255).toString(16);
  }

  colorHex():String {
    return "#" + this.generateRamdon() + this.generateRamdon() + this.generateRamdon();
  }
}
