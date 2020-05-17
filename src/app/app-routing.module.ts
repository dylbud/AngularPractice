import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { FlipImageComponent } from './flip-image/flip-image.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'timer', component: CountdownTimerComponent},
  { path: 'flip-image', component: FlipImageComponent},
  { path: '', component: HomeComponent },
  { path: '**', component: FileNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
