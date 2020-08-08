import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { TimerComponent } from './countdown-timer/timer/timer.component';
import { TimerInputComponent } from './countdown-timer/timer-input/timer-input.component';
import { FlipImageComponent } from './flip-image/flip-image.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { NotesComponent } from './notes/notes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { QuizzlerComponent } from './quizzler/quizzler.component';
import { RecipeModalComponent } from './recipes/recipe-modal/recipe-modal.component';

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
    NotesComponent,
    RecipeListComponent,
    QuizzlerComponent,
    RecipeModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
  ],
  entryComponents: [RecipeModalComponent],
  providers: [BsModalRef],
  bootstrap: [AppComponent],
})
export class AppModule {}
