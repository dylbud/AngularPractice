import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  data: object;
  form: FormGroup;
  searchTerm: FormControl = new FormControl();

  constructor(fb: FormBuilder, private service: RecipeService) {
    this.form = fb.group({
      searchTerm: this.searchTerm,
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.service.searchRecipes(this.searchTerm.value).subscribe((data) => {
      console.log(data);
      this.data = data;
      // console.log(this.data);
    });
  }
}
