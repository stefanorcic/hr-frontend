import { TestBed } from '@angular/core/testing';

import { CandidateSearchMasterService } from './candidate-search-master.service';

describe('CandidateSearchMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateSearchMasterService = TestBed.get(CandidateSearchMasterService);
    expect(service).toBeTruthy();
  });
});
