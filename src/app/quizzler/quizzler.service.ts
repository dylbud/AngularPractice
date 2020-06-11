import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { QuizItem, Quiz } from './quizzler.models';

@Injectable({
  providedIn: 'root',
})
export class QuizzlerService {
  constructor(private http: HttpClient) {}

  getQuiz(difficulty: string): Observable<Quiz> {
    return this.http.get<any>(
      `https://opentdb.com/api.php?amount=10&category=20&difficulty=${difficulty}`,
      { responseType: 'json' }
    );
  }
}
