import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateSearchMasterComponent } from './candidate-search-master.component';

describe('CandidateSearchMasterComponent', () => {
  let component: CandidateSearchMasterComponent;
  let fixture: ComponentFixture<CandidateSearchMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateSearchMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateSearchMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
