import { Component, Input } from '@angular/core';
import { Food } from '../../interfaces/diet.interfaces';

@Component({
  selector: 'diet-day',
  templateUrl: './dish.component.html'
})
export class DishComponent {

  @Input('diet')
  public diet: Food[] = [];

  @Input('day')
  public day:string = "";

}
