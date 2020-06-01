import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  getRecipes(): Observable<object> {
    return this.http.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
      { responseType: 'json' }
    );
  }
}
