import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSkillDialogComponent } from './candidate-skill-dialog.component';

describe('CandidateSkillDialogComponent', () => {
  let component: CandidateSkillDialogComponent;
  let fixture: ComponentFixture<CandidateSkillDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSkillDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSkillDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
