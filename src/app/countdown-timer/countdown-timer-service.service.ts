import { Injectable } from '@angular/core';
import { Observable, timer, pipe, of } from 'rxjs';
import { take, map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountdownTimerService {
  seconds$: Observable<number>;
  minutes$: Observable<number>;
  hours$: Observable<number>;
  days$: Observable<number>;
  eventDate: Date;
  timerIsHidden$ = of(true);
  eventName$: Observable<string>;

  INTERVAL = 1000;


  constructor() { }

  getMilliseconds(): number {
    const currentDate = new Date();
    return Math.floor((this.eventDate.getTime() - currentDate.getTime()) / 1000);
  }

  getSeconds(): Observable<number> {
    let seconds = this.getMilliseconds();
    return timer(0, this.INTERVAL).pipe(take(seconds), map(() => {
      seconds = seconds - 1;
      return seconds % 60;
    }));
  }

  getMinutes(): Observable<number> {
    let seconds = this.getMilliseconds();
    let minutes = Math.floor(seconds / 60);
    return timer(0, this.INTERVAL).pipe(take(seconds), map(() => {
      seconds = seconds - 1;
      minutes = seconds % 60 === 59 ? minutes - 1 : minutes;
      return minutes % 60;
    }), distinctUntilChanged());
  }

  getHours(): Observable<number> {
    let seconds = this.getMilliseconds();
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    return timer(0, this.INTERVAL).pipe(take(seconds), map(() => {
      seconds = seconds - 1;
      minutes = seconds % 60 === 59 ? minutes - 1 : minutes;
      hours = minutes % 60 === 59 && seconds % 60 === 59 ? hours - 1 : hours;
      return hours % 24;
    }), distinctUntilChanged());
  }

  getDays(): Observable<number> {
    let seconds = this.getMilliseconds();
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    return timer(0, this.INTERVAL).pipe(take(seconds), map(() => {
      seconds = seconds - 1;
      minutes = seconds % 60 === 59 ? minutes - 1 : minutes;
      hours = minutes % 60 === 59 && seconds % 60 === 59 ? hours - 1 : hours;
      days = hours % 24 === 23 && minutes % 60 === 59 && seconds % 60 === 59 ? days - 1 : days;
      return days;
   }), distinctUntilChanged());
  }

  setTimerDisplay(eventDate: Date, eventName: string): void {
    this.eventDate = eventDate;
    this.eventName$ = of(eventName);
    this.seconds$ = this.getSeconds();
    this.minutes$ = this.getMinutes();
    this.hours$ = this.getHours();
    this.days$ = this.getDays();
    this.timerIsHidden$ = of(false);
  }

}
