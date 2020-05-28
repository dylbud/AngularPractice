import { Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { Stream } from 'stream';

@Component({
  selector: 'app-flip-image',
  templateUrl: './flip-image.component.html',
  styleUrls: ['./flip-image.component.css'],
})
export class FlipImageComponent implements OnInit {
  horizontallyflipped: boolean;
  flippedUp: boolean;
  flippedDown: boolean;
  imageUrl = 'assets/images/cat.jpg';
  xValue: number;
  yValue: number;
  constructor() {}

  ngOnInit() {
    this.xValue = 0;
    this.yValue = 0;
  }

  flipRight() {
    if ((this.xValue / 180) % 2 === 1) {
      this.yValue = this.yValue - 180;
    } else {
      this.yValue = this.yValue + 180;
    }
  }

  flipLeft() {
    if ((this.xValue / 180) % 2 === 1) {
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
