import { Component } from '@angular/core';
import { Food } from '../interfaces/diet.interfaces';

import monday from '../common/diets/monday.json';
import tuesday from '../common/diets/tuesday.json';
import wednesday from '../common/diets/wednesday.json';
import thursday from '../common/diets/thursday.json';
import friday from '../common/diets/friday.json';
import saturday from '../common/diets/saturday.json';
import sunday from '../common/diets/sunday.json';

interface Days {
  day: string;
  diet: Food[]
}

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {

  public days: Days[] = [];

  constructor() {
    this.days = [
      {
        day: "Lunes",
        diet: monday.data
      },
      {
        day: "Martes",
        diet: tuesday.data
      },
      {
        day: "Miercoles",
        diet: wednesday.data
      },
      {
        day: "Jueves",
        diet: thursday.data
      },
      {
        day: "Viernes",
        diet: friday.data
      },
      {
        day: "Sabado",
        diet: saturday.data
      },
      {
        day: "Domingo",
        diet: sunday.data
      }
    ]
  }
}
