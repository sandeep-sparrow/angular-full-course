import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-05/Tomato-Pie_0256.jpg?itok=FipXLNDr',
            [
                new Ingredient("Onion", 1),
                new Ingredient("French Fries", 20)
            ]
        ),
        new Recipe(
            'A Another Test Recipe',
            'This is simply another test',
            'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/2022-05/Tomato-Pie_0256.jpg?itok=FipXLNDr',
            [
                new Ingredient("Buns", 2),
                new Ingredient("Tomatoes", 20)
            ]
        )
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }
}
