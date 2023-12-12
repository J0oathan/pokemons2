import { Component } from '@angular/core';
import { Pokemon } from './commonJcruz/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokemons';
  // miVar:number;
  pokemons:Array<Pokemon>

  constructor(){
    // this.miVar = 0;
    this.pokemons = [
      {
        nPokedex   : 'a',
        urlImg     : 'assets/animated-pokemon/1.gif',
        name       : 'a',
        description: 'a',
        type       : 'a',
        abilities  : 'a',
        height     : 'a',
        weight     : 'a',
        weaknesses : ['a', 'b'],
      },
      {
        nPokedex   : 'x',
        urlImg     : 'assets/animated-pokemon/2.gif',
        name       : 'x',
        description: 'x',
        type       : 'x',
        abilities  : 'x',
        height     : 'x',
        weight     : 'x',
        weaknesses : ['x', 'b'],
      }
    ]
  }

  // generateRamdon():String {
  //   return Math.floor(Math.random()*255).toString(16);
  // }

  // colorHex():String {
  //   return "#" + this.generateRamdon() + this.generateRamdon() + this.generateRamdon();
  // }
}
