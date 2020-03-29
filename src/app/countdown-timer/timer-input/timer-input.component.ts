import { Component, OnInit} from '@angular/core';
import {BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnInit {

  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date()
    });
   }

  datePickerConfig: Partial<BsDatepickerConfig>;
  eventName: string;
  eventDate: Date;
  eventTime: Date;
  eventDateTime: Date;

  ngOnInit() {
  }

  submitEvent(form: NgForm): void {
    console.log(form.value);
    this.eventName = form.value.eventName;
  }

}
