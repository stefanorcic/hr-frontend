import { TestBed } from '@angular/core/testing';

import { CandidateSearchService } from './candidate-search.service';

describe('CandidateSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateSearchService = TestBed.get(CandidateSearchService);
    expect(service).toBeTruthy();
  });
});
