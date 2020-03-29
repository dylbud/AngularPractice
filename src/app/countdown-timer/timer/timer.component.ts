import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  @Input() eventNameInput: string;
  @Input() eventDateInput: Date;
  @Input() eventTimeInput: Date;






  ngOnInit() {
  }


}
