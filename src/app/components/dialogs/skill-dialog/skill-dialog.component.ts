import { Component, OnInit, Inject } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Skill } from 'src/app/models/skill';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.css']
})
export class SkillDialogComponent implements OnInit {

  public flag: number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill,
    public skillService: SkillService
  ) { }

  ngOnInit() {
  }

  public add(): void {
    this.data.id = -1;
    this.skillService.addSkill(this.data);
    this.snackBar.open("successfully added: " + this.data.name, "ok", { duration: 2500 });
  }

  public update(): void {
    this.skillService.updateSkill(this.data);
    this.snackBar.open("successfully updated: " + this.data.id, "ok", { duration: 2500 });
  }

  public delete(): void {
    this.skillService.deleteSkill(this.data.id);
    this.snackBar.open("successfully deleted: " + this.data.id, "ok", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("cancel", "ok", { duration: 1000 });
  }
}
