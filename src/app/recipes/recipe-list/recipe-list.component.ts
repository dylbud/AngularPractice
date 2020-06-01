import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private service: RecipeService) {}

  data: object;

  ngOnInit() {
    this.service.getRecipes().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });
  }
}
