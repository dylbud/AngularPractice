import { TestBed } from '@angular/core/testing';

import { RecipeFacade } from './recipe-facade.service';

describe('RecipeFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeFacade = TestBed.get(RecipeFacade);
    expect(service).toBeTruthy();
  });
});
