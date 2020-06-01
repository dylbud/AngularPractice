import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { FlipImageComponent } from './flip-image/flip-image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import { NotesComponent } from './notes/notes.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'timer', component: CountdownTimerComponent },
  { path: 'flip-image', component: FlipImageComponent },
  { path: 'reactive-form-example', component: ReactiveFormExampleComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: FileNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
