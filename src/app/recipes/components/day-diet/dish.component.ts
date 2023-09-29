import { Component } from '@angular/core';
import { Food } from '../../interfaces/diet.interfaces';

import monday from '../../common/diets/monday.json';

@Component({
  selector: 'diet-day',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {

  public mondayDiet: Food[] = monday.data;

  public returnDiet(): string {
    return JSON.stringify(this.mondayDiet,);
  }

}
