import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { RecipeFacade, RecipeState, Recipe } from '../recipe-facade.service';
import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  modalRef: BsModalRef;

  searchTerm: FormControl;
  vm$: Observable<RecipeState> = this.facade.vm$;

  constructor(
    private facade: RecipeFacade,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    // this.facade.recipes$.subscribe((data) => console.log('recipes$', data));
    // this.facade.vm$.subscribe((data) => console.log('vm$: ', data));

    const { searchTerm } = this.facade.getStateSnapshot();
    this.searchTerm = this.facade.buildSearchTermControl();
    this.searchTerm.patchValue(searchTerm, { emitEvent: false });
  }

  openModalWithComponent(recipe: Recipe) {
    const initialState = { recipe };
    this.modalRef = this.modalService.show(RecipeModalComponent, {
      initialState,
    });
  }
}
