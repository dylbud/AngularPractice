import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

export class IngredientMeasure {
  measure: string;
  ingredient: string;
}

export interface Recipe {
  mealTitle: string;
  ingredients: IngredientMeasure[];
  instructions: string;
  mealImage: string;
  mealArea: string;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  searchRecipes(searchTerm: string): Observable<any[]> {
    return this.http
      .get<any>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        { responseType: 'json' }
      )
      .pipe(
        map((data) => {
          if (data.meals) {
            return data.meals.map((r) => {
              const recipe: Recipe = {
                mealTitle: r.strMeal,
                ingredients: [],
                instructions: r.strInstructions,
                mealImage: r.strMealThumb,
                mealArea: r.strArea,
              };
              for (let i = 1; i <= 20; i++) {
                const ingMeas: IngredientMeasure = new IngredientMeasure();
                ingMeas.ingredient = r['strIngredient' + i];
                ingMeas.measure = r['strMeasure' + i];
                if (ingMeas.ingredient !== '' && ingMeas.measure !== '') {
                  recipe.ingredients.push(ingMeas);
                }
              }
              return recipe;
            });
          }
        })
      );
  }
}
