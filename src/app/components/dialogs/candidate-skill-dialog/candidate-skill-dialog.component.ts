import { Component, OnInit, Inject } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CandidateSkill } from 'src/app/models/candidateSkill';
import { CandidateSkillService } from 'src/app/services/candidate-skill.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-candidate-skill-dialog',
  templateUrl: './candidate-skill-dialog.component.html',
  styleUrls: ['./candidate-skill-dialog.component.css']
})
export class CandidateSkillDialogComponent implements OnInit {

  skills: Skill[];
  public flag: Number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CandidateSkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CandidateSkill,
    public candidateSkillService: CandidateSkillService,
    public skillService: SkillService
  ) { }
 
 
  ngOnInit() {
    this.skillService.getAllSkill().subscribe(skills =>
      this.skills = skills
    );
  }
 
  public add(): void {
    this.data.id = -1;
    this.candidateSkillService.addCandidateSkill(this.data);
    this.snackBar.open("successfully added", "ok", { duration: 2500 });
  }
 
  public update(): void {
    this.candidateSkillService.updateCandidateSkill(this.data);
    this.snackBar.open("successfully updated", "ok", { duration: 2500 });
  }
 
  public delete(): void {
    this.candidateSkillService.deleteCandidateSkill(this.data.id);
    this.snackBar.open("successfully deleted", "ok", { duration: 2000 });
  }
 
  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("cancel", "ok", { duration: 1000 });
  }
 
  compareTo(a, b) {
    return a.id == b.id;
  }

}
