import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
          'A test recipe',
      'This is simply a test',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-05/Tomato-Pie_0256.jpg?itok=FipXLNDr'
    ),
    new Recipe(
      'A Another test recipe',
      'This is simply a test',
      'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-05/Tomato-Pie_0256.jpg?itok=FipXLNDr'
    )
  ];

  constructor() {
  }

  ngOnInit(){

  }

  onRecipeSelected(recipeElement: Recipe) {
    this.recipeWasSelected.emit(recipeElement);
  }
}
