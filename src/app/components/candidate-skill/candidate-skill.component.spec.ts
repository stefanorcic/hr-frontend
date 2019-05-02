import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSkillComponent } from './candidate-skill.component';

describe('CandidateSkillComponent', () => {
  let component: CandidateSkillComponent;
  let fixture: ComponentFixture<CandidateSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
