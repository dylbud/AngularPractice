import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  years: number = 2;
  months: number = 5;
  days: number = 24;
  hours: number = 8;
  minutes: number = 56;
  seconds: number = 2;

  @Input()
  eventNameInput: string;

  constructor() { }








  ngOnInit() {
  }


}
