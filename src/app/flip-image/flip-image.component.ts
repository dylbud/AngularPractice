import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flip-image',
  templateUrl: './flip-image.component.html',
  styleUrls: ['./flip-image.component.css'],
})
export class FlipImageComponent implements OnInit {
  imageUrl = 'assets/images/cat.jpg';
  xValue: number;
  yValue: number;

  constructor() {}

  ngOnInit() {
    this.xValue = 0;
    this.yValue = 0;
  }

  flipRight() {
    if (Math.abs((this.xValue / 180) % 2) === 1) {
      this.yValue = this.yValue - 180;
    } else {
      this.yValue = this.yValue + 180;
    }
  }

  flipLeft() {
    if (Math.abs((this.xValue / 180) % 2) === 1) {
      this.yValue = this.yValue + 180;
    } else {
      this.yValue = this.yValue - 180;
    }
  }

  flipUp() {
    this.xValue = this.xValue + 180;
  }

  flipDown() {
    this.xValue = this.xValue - 180;
  }
}
