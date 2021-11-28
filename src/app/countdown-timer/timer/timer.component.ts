import { Component } from '@angular/core';
import { CountdownTimerService } from '../countdown-timer-service.service';



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
public service: CountdownTimerService
  constructor(service: CountdownTimerService) { }

}
