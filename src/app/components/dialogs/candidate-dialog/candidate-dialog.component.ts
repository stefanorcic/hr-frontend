import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-dialog',
  templateUrl: './candidate-dialog.component.html',
  styleUrls: ['./candidate-dialog.component.css']
})
export class CandidateDialogComponent implements OnInit {

  public flag: number;
  constructor(public snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CandidateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Candidate,
    public candidateService: CandidateService
  ) { }

  ngOnInit() {
  }

 

  public add(): void {
    this.data.id = -1;
    this.candidateService.addCandidate(this.data);
    this.snackBar.open("successfully added: " + this.data.name, "ok", { duration: 2500 });
  }

  public update(): void {
    this.candidateService.updateCandidate(this.data);
    this.snackBar.open("successfully updated: " + this.data.id, "ok", { duration: 2500 });
  }

  public delete(): void {
    this.candidateService.deleteCandidate(this.data.id);
    this.snackBar.open("successfully deleted: " + this.data.id, "ok", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("cancel", "ok", { duration: 1000 });
  }

}
