import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{

    ingredientsAdded = new EventEmitter<Ingredient[]>();
    ingredientAdded = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 100),
        new Ingredient("Tomatoes",  200)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientAdded.emit(ingredient);
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientsAdded.emit(this.ingredients.slice());
    }

}
