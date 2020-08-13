import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Recipe } from '../recipe.service';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: ['./recipe-modal.component.css'],
})
export class RecipeModalComponent implements OnInit {
  public recipe: Recipe;
  constructor(public modalRef: BsModalRef) {}

  ngOnInit() {
    console.log(
      'BsModalRef from modal content component',
      this.modalRef,
      this.recipe
    );
  }
}
