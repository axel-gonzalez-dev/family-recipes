import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

import { RecipesComponent } from './pages/recipes.component';
import { DishComponent } from './components/day-diet/dish.component';

@NgModule({
  declarations: [
    RecipesComponent,
    DishComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    RecipesComponent,
    DishComponent
  ],
  providers: []
})
export class DietModule { }
