import { Component, OnInit } from '@angular/core';
import { QuizzlerService } from './quizzler.service';
import { QuizItem, Quiz, QuizItemAnswer } from './quizzler.models';
import { map } from 'rxjs/operators';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
} from '@angular/forms';
import { concat } from 'rxjs';

@Component({
  selector: 'app-quizzler',
  templateUrl: './quizzler.component.html',
  styleUrls: ['./quizzler.component.css'],
})
export class QuizzlerComponent implements OnInit {
  data: object[];
  quiz: Quiz;
  form: FormGroup;
  quizItems: QuizItem[];

  constructor(
    private service: QuizzlerService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({});
  }

  submit() {
    console.log(this.form.value);
  }

  ngOnInit() {
    this.service
      .getQuiz('easy')
      .pipe(map((data) => data.results))
      .subscribe(
        (data) => {
          this.quiz = this.parseResponse(data);
          console.log(this.quiz);
          this.quizItems = this.getQuizItems();
          console.log(this.quizItems);
          this.quizItems.forEach((qi, i) => {
            this.form.addControl(`formControl${i}`,
            this.formBuilder.control(null, null));
          });
        },
        (error) => console.log(error)
      );
  }

  parseResponse(data: any[]): Quiz {
    const quiz = new Quiz();
    data.forEach((d) => {
      const quizItem = new QuizItem(
        d.category,
        d.correct_answer,
        d.difficulty,
        d.incorrect_answers,
        d.question,
        d.type,
        this.randomizeQuizItemAnswers(d.incorrect_answers, d.correct_answer)
      );
      quiz.quizItems.push(quizItem);
    });
    return quiz;
  }

  randomizeQuizItemAnswers(
    incorrectAnswers: string[],
    correctAnswer: string
  ): QuizItemAnswer[] {
    const quizItemAnswers = new Array<QuizItemAnswer>();
    quizItemAnswers.push({ value: correctAnswer, isCorrect: true });
    incorrectAnswers.forEach((ia) => {
      quizItemAnswers.push({ value: ia, isCorrect: false });
    });
    for (let i = quizItemAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = quizItemAnswers[i];
      quizItemAnswers[i] = quizItemAnswers[j];
      quizItemAnswers[j] = temp;
    }
    return quizItemAnswers;
  }

  isCorrect(isCorrect: boolean) {
    console.log(isCorrect);
  }

  getQuizItems() {
    return this.quiz.quizItems;
  }
}
