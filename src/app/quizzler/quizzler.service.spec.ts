import { TestBed } from '@angular/core/testing';

import { QuizzlerService } from './quizzler.service';

describe('QuizzlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizzlerService = TestBed.get(QuizzlerService);
    expect(service).toBeTruthy();
  });
});
