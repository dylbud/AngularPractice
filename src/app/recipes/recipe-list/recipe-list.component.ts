import { Component, OnInit, TemplateRef } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

export class IngredientMeasure {
  measure: string;
  ingredient: string;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  data: object;
  form: FormGroup;
  searchTerm: FormControl = new FormControl();
  modalRef: BsModalRef;
  mealTitle: string;
  ingredients: IngredientMeasure[];
  instructions: string;
  mealImage: string;

  constructor(
    fb: FormBuilder,
    private service: RecipeService,
    private modalService: BsModalService
  ) {
    this.form = fb.group({
      searchTerm: this.searchTerm,
    });
  }

  ngOnInit() {
    this.ingredients = new Array<IngredientMeasure>();
  }

  onSubmit() {
    this.service.searchRecipes(this.searchTerm.value).subscribe((data) => {
      this.data = data;
    });
  }

  openModal(template: TemplateRef<any>, meal: any) {
    this.mealTitle = meal.strMeal;
    this.mealImage = meal.strMealThumb;
    this.instructions = meal.strInstructions;
    this.ingredients = new Array<IngredientMeasure>();
    for (let i = 1; i <= 20; i++) {
      const ingMeas: IngredientMeasure = new IngredientMeasure();
      ingMeas.ingredient = meal['strIngredient' + i];
      ingMeas.measure = meal['strMeasure' + i];
      if (ingMeas.ingredient !== '' && ingMeas.measure !== '') {
        this.ingredients.push(ingMeas);
      }
    }
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    console.log(this.ingredients);
  }
}
