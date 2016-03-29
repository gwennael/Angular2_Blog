/**
 * Created by Gwennaël on 27/03/2016.
 */

import {Component} from "angular2/core";
import {HeroDetailComponent} from "./hero-detail.component";
import {Hero} from "./hero";

export class Personne {
    Id: number;
    name: string;
}

@Component({
    selector: 'heroes',
    template: `<h2>{{personne.name}} details!</h2> <div><label>id: </label>{{personne.Id}}</div> <div> <label>name: </label> <input [(ngModel)]="personne.name" placeholder="name"> </div>
              <h2>My Heroes</h2>
              <ul class="heroes">
                <li *ngFor="#hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
                    <span class="badge">{{hero.Id}}</span> {{hero.name}}
                </li>
              </ul>
              <my-hero-detail [hero]="selectedHero"></my-hero-detail>`,
    styles:[`
  .selected {
    background-color: #00aa9a !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    directives: [HeroDetailComponent]
})
export class HeroesTemplate2{
    heroes = HEROES;
    public personne: Personne = {
        Id: 1,
        name: 'Gwennaël'
    };
    selectedHero: Hero;
    onSelect(hero: Hero) { this.selectedHero = hero; }
};

var HEROES :  Hero []  =  [
    {  "Id" :  11 ,  "name" :  "Mr. Nice"  },
    {  "Id" :  12 ,  "name" :  "Narco"  },
    {  "Id" :  13 ,  "name" :  "Bombasto"  },
    {  "Id" :  14 ,  "name" :  "Celeritas"  },
    {  "Id" :  15 ,  "name" :  "Magneta"  },
    {  "Id" :  16 ,  "name" :  "Rubberman"  },
    {  "Id" :  17 ,  "name" :  "Dynama"  },
    {  "Id" :  18 ,  "name" :  "Dr IQ"  },
    {  "Id" :  19 ,  "name" :  "Magma"  },
    {  "Id" :  20 ,  "name" :  "Tornado"  }
];