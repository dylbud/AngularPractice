import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class QuizzlerService {
  constructor(private http: HttpClient) {}

  getQuiz(difficulty: string): Observable<object> {
    return this.http.get(
      `https://opentdb.com/api.php?amount=10&category=20&difficulty=${difficulty}`,
      { responseType: 'json' }
    );
  }
}
