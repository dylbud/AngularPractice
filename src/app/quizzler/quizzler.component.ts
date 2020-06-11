import { Component, OnInit } from '@angular/core';
import { QuizzlerService } from './quizzler.service';
import { QuizItem, Quiz } from './quizzler.models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quizzler',
  templateUrl: './quizzler.component.html',
  styleUrls: ['./quizzler.component.css'],
})
export class QuizzlerComponent implements OnInit {
  quiz: Quiz;

  constructor(private service: QuizzlerService) {}

  ngOnInit() {
    this.service.getQuiz('hard')
    .pipe(map(data => data.results), map(data => this.quiz = data))
    .subscribe();
    console.log(this.quiz);
  }
}
