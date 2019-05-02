import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { Candidate } from 'src/app/models/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
import { CandidateDialogComponent } from '../dialogs/candidate-dialog/candidate-dialog.component';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent implements OnInit {

  displayedColumns = ['id', 'name', 'contactNumber', 'dateOfBirth', 'email', 'actions'];
  dataSource: MatTableDataSource<Candidate>;
  selectedCandidate: Candidate;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public candidateService : CandidateService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.candidateService.getAllCandidate().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      
      this.dataSource.sortingDataAccessor = (data, property) => {
        switch (property) {
          case 'id': return data[property];
          default: return data[property].toLocaleLowerCase();
        }
      };
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
      
  )};

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public selectRow(row) {
    this.selectedCandidate = row;
  }

  public openDialog(flag: number, id: number, name: string, contactNumber: string, dateOfBirth: Date, email: string) {
    const dialogRef = this.dialog.open(CandidateDialogComponent, { data: { id: id, name: name, contactNumber: contactNumber, dateOfBirth: dateOfBirth, email: email } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }
}
