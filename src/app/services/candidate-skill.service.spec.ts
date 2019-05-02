import { TestBed } from '@angular/core/testing';

import { CandidateSkillService } from './candidate-skill.service';

describe('CandidateSkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandidateSkillService = TestBed.get(CandidateSkillService);
    expect(service).toBeTruthy();
  });
});
