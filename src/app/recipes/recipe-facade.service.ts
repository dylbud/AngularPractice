import { Injectable } from '@angular/core';
import { RecipeService, Recipe } from './recipe.service';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  switchMap,
  debounceTime,
  tap,
} from 'rxjs/operators';
import { FormControl } from '@angular/forms';

export interface RecipeState {
  recipes: Recipe[];
  searchTerm: string;
  loading: boolean;
}

// tslint:disable-next-line: variable-name
let _state: RecipeState = {
  recipes: [],
  searchTerm: '',
  loading: false,
};

@Injectable({
  providedIn: 'root',
})
export class RecipeFacade {
  private store = new BehaviorSubject<RecipeState>(_state);
  private state$ = this.store.asObservable();

  recipes$ = this.state$.pipe(
    map((state) => state.recipes),
    distinctUntilChanged()
  );
  searchTerm$ = this.state$.pipe(
    map((state) => state.searchTerm),
    distinctUntilChanged()
  );
  loading$ = this.state$.pipe(
    map((state) => state.loading),
    distinctUntilChanged()
  );

  vm$: Observable<RecipeState> = combineLatest(
    this.recipes$,
    this.searchTerm$,
    this.loading$
  ).pipe(
    map(([recipes, searchTerm, loading]) => {
      return { recipes, searchTerm, loading };
    })
  );

  constructor(service: RecipeService) {
    // if I hade more than one parameter I would use combineLatest here:
    this.searchTerm$
      .pipe(
        switchMap((s) => {
          return service.searchRecipes(s);
        })
      )
      .subscribe(
        (recipes) => {
          this.updateState({ ..._state, recipes, loading: false });
        },
        (error) => console.log('Error Report: ', error)
      );
  }

  getStateSnapshot(): RecipeState {
    return { ..._state };
  }

  buildSearchTermControl(): FormControl {
    const searchTerm = new FormControl();
    searchTerm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) => this.updateSearchTerm(value));
    return searchTerm;
  }

  updateSearchTerm(term: string) {
    this.updateState({ ..._state, searchTerm: term, loading: true });
  }

  private updateState(state: RecipeState) {
    this.store.next((_state = state));
  }
}
