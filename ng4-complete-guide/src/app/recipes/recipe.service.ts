import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
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

    getRecipes(){
        return this.recipes.slice();
    }
}
