import { Component } from '@angular/core';
import {DayDiet} from '../../interfaces/diet.interfaces';

@Component({
  selector: 'diet-day',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent {

  public mondayDiet: DayDiet = {
    foods: [{
      time: "Desayuno",
      ingredients: ["Te o cafe sin azucar", "1 vaso(200 ml) de leche descremada", "1 rebanada de pan integral", "1 rebanada fna de queso panela", "1 plato con 300 g de sandia"]
    },
    {
      time:"Media manana",
      ingredients: ["1 fruta fresca"]
    },
  {
    time:"Comida",
    ingredients:["1 plato mediano de sopa de verduras", "1 rebanada delgada (100g) de cuete mechado con verduras al horno","1 platano meiano de acelgas al vapor", "1 pera fresca"]
  },
  {
    time:"Cena",
    ingredients: ["1 plato de sopa de jitomate fria", "1 plato de maiz tierno cocido", "4 rodajas de calabaza y col"]
  },
{
  time: "Noche",
  ingredients: ["1 vaso (200 ml) de leche descremada", "3 galletas de calabaza y col"]
}]
  }

  public returnDiet():string{
    return JSON.stringify(this.mondayDiet,);
  }

}
