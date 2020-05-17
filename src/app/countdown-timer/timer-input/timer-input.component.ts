import { Component, OnInit} from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NgForm, FormControl, AbstractControl, NgModel } from '@angular/forms';
import { CountdownTimerService } from '../countdown-timer-service.service';



@Component({
  selector: 'app-timer-input',
  templateUrl: './timer-input.component.html',
  styleUrls: ['./timer-input.component.css']
})
export class TimerInputComponent implements OnInit {

  constructor(private service: CountdownTimerService) {
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

  validateTime(): boolean {
     if (this.eventDate && this.eventTime < new Date()) {
       if (this.eventDate.getFullYear() === this.eventTime.getFullYear()
       && this.eventDate.getMonth() ===  this.eventTime.getMonth()
       && this.eventDate.getDate() === this.eventTime.getDate()) {
       return false;
       }
     }
     return true;
  }

  ngOnInit() {
  }

  submitEvent(form: NgForm): void {
    this.eventName = form.value.eventName;
    if (form.value.eventTime) {
      this.eventDate.setHours(this.eventTime.getHours());
      this.eventDate.setMinutes(this.eventTime.getMinutes());
      this.eventDate.setSeconds(this.eventTime.getSeconds());
    } else {
      this.eventDate.setHours(0);
      this.eventDate.setMinutes(0);
      this.eventDate.setSeconds(0);
    }
    this.service.setTimerDisplay(this.eventDate, this.eventName);
  }

}
