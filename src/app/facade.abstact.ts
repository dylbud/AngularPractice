import { BehaviorSubject, Observable } from "rxjs";

export abstract class Facade<TState> {
    protected state: TState;
    protected readonly initialState: TState;
    protected store: BehaviorSubject<TState>;
    protected state$: Observable<TState>;
  
    constructor(initialState: TState) {
      this.initialState = initialState;
      this.state = initialState;
      this.store = new BehaviorSubject<TState>(this.state);
      this.state$ = this.store.asObservable();
    }
  
    public reset() {
      this.updateState(this.initialState);
    }
  
    /** Update internal state cache and emit from store... */
    protected updateState(updatedState: TState) {
      this.store.next((this.state = updatedState));
    }
  }
  