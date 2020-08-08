import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

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
          return data.meals;
        })
      );
  }
}
