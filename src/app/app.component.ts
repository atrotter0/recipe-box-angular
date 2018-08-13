import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Scrambled Eggs',
      ['2 Eggs', 'Dab of Butter', 'Dash salt & pepper'],
      ['Add eggs to pan', 'Add butter to pan', 'Cook eggs in pan', 'Add a dash of salt and pepper as needed'
    ),
    new Recipe(
      'Quesadilla',
      ['Tortilla, cheese', 'optional: protein of your choice'],
      ['Heat pan on medium', 'Warm tortilla in pan', 'Great cheese onto tortilla and fold in half', 'Enjoy'),
    new Recipe(
      'Cereal With Milk',
      ['Cereal of choice', 'Milk of choice'],
      ['Add cereal to round bowl', 'Pour sufficient milk in bowl', 'Enjoy with a spoon']
    ),
  ]
}
