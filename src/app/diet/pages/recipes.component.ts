import { Component } from '@angular/core';
import { Food } from '../interfaces/diet.interfaces';

import monday from '../common/diets/monday.json';
import tuesday from '../common/diets/tuesday.json';

interface Days{
  day:string;
  diet: Food[]
}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {

  public days:Days[] = {};

  constructor(){
    this.days = [
      {
        day: "Lunes",
        diet: monday
      },
      {
        day: "Martes",
        diet: tuesday
      }
    ]
  }
}
