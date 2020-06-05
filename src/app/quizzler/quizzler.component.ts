import { Component, OnInit } from '@angular/core';
import { QuizzlerService } from './quizzler.service';

@Component({
  selector: 'app-quizzler',
  templateUrl: './quizzler.component.html',
  styleUrls: ['./quizzler.component.css'],
})
export class QuizzlerComponent implements OnInit {
  data: object;

  constructor(private service: QuizzlerService) {}

  ngOnInit() {
    this.service.getQuiz('hard').subscribe((data) => {
      this.data = data;
      console.log(data);
    });
  }
}
