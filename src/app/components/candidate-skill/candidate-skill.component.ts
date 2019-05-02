import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Candidate } from 'src/app/models/candidate';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { CandidateSkill } from 'src/app/models/candidateSkill';
import { CandidateSkillService } from 'src/app/services/candidate-skill.service';
import { Skill } from 'src/app/models/skill';
import { CandidateSkillDialogComponent } from '../dialogs/candidate-skill-dialog/candidate-skill-dialog.component';

@Component({
  selector: 'app-candidate-skill',
  templateUrl: './candidate-skill.component.html',
  styleUrls: ['./candidate-skill.component.css']
})
export class CandidateSkillComponent implements OnInit {

  displayedColumns = ['id', 'skill', 'actions'];
  dataSource: MatTableDataSource<CandidateSkill>;

  @Input() selectedCandidate: Candidate;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public candidateServiceSkill: CandidateSkillService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selectedCandidate.id) {
      this.loadData();
    }
  }

  public loadData() {
    this.dataSource = new MatTableDataSource<CandidateSkill>(null);
    this.candidateServiceSkill.getCandidateSkillById(this.selectedCandidate.id).subscribe(data => {
      this.dataSource = new MatTableDataSource<CandidateSkill>(data);

      
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'id': return data[property];
          case 'skillBean': return data.skillBean.name.toLocaleLowerCase();
          default: return data[property];
        }
      };
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  public openDialog(flag: number, id: number, skillBean: Skill, candidateBean: Candidate) {
    const dialogRef = this.dialog.open(CandidateSkillDialogComponent, {
      data: {
         id: id, 
        skill: skillBean, candidate: candidateBean
      }
    });
    dialogRef.componentInstance.flag = flag;
    if (flag == 1 || flag == 2){
      dialogRef.componentInstance.data.candidateBean = this.selectedCandidate;
    }
      
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }
  
}
