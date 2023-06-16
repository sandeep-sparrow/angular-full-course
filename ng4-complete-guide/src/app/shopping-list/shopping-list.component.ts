import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = shoppingListService.getIngredients();
  }

  ngOnInit(): void {
    this.shoppingListService.ingredientsAdded
        .subscribe((ingredients: Ingredient[]) => {
          this.ingredients.push(...ingredients);
        }
    );
    this.shoppingListService.ingredientAdded
        .subscribe((ingredient: Ingredient) => {
              this.ingredients.push(ingredient);
        }
    );
  }

}
