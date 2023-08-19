import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "../../shopping-list/shopping-list.service";
import { RecipeService } from "../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipe: Recipe;
  id: number;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute) {
  }

  onAddToShoppingList() {
      this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  ngOnInit(): void {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log("Id: ", this.id);
          this.recipe = this.recipeService.getRecipe(this.id);
          console.log("Recipe: ", this.recipe);
        }
    );
  }
}
