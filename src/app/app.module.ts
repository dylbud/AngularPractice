import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerComponent } from './countdown-timer/timer/timer.component';
import { TimerInputComponent } from './countdown-timer/timer-input/timer-input.component';
import { FlipImageComponent } from './flip-image/flip-image.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { MytestComponent } from './mytest/mytest.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileNotFoundComponent,
    CountdownTimerComponent,
    TimerComponent,
    TimerInputComponent,
    FlipImageComponent,
    ReactiveFormExampleComponent,
    MytestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
