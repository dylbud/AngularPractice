import { Component, OnInit, TemplateRef } from '@angular/core';
import { QuizzlerService } from './quizzler.service';
import { QuizItem, Quiz, QuizItemAnswer } from './quizzler.models';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-quizzler',
  templateUrl: './quizzler.component.html',
  styleUrls: ['./quizzler.component.css'],
})
export class QuizzlerComponent implements OnInit {
  difficulty: string;
  modalRef: BsModalRef;
  quiz: Quiz;
  form: FormGroup;
  hasBeenSubmitted = false;

  constructor(
    private service: QuizzlerService,
    private formBuilder: FormBuilder,
    private modalService: BsModalService
  ) {
    this.form = this.formBuilder.group({});
  }

  submit(template: TemplateRef<any>) {
    console.log(this.form);
    this.hasBeenSubmitted = true;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  ngOnInit() {
    this.startQuiz('easy');
  }

  startQuiz(difficulty) {
    this.difficulty = difficulty;
    this.hasBeenSubmitted = false;
    this.difficulty = difficulty;
    this.service
      .getQuiz(this.difficulty)
      .pipe(map((data) => data.results))
      .subscribe(
        (data) => {
          console.log(data);
          this.quiz = this.parseResponse(data);
          console.log(this.quiz);
          this.quiz.quizItems.forEach((qi, i) => {
            this.form.addControl(
              `formControl${i}`,
              this.formBuilder.control(null, Validators.required)
            );
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

  getScore(message: string) {
    console.log(message);
    return Object.values(this.form.controls).filter((fc) => fc.value.isCorrect)
      .length;
  }

  reviewResponses() {
    this.modalRef.hide();
  }

  isChecked(i: number, currentValue: string): boolean {
    if (this.form.get(`formControl${i}`).value.value === currentValue) {
      return true;
    }
    return false;
  }

  tryNext() {
    if (this.difficulty === 'easy') {
      this.difficulty = 'medium';
    } else if (this.difficulty === 'medium') {
      this.difficulty = 'hard';
    }
    this.startQuiz(this.difficulty);
    this.modalRef.hide();
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
