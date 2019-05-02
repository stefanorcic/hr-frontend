import { Component, OnInit, ViewChild } from '@angular/core';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { SkillDialogComponent } from '../dialogs/skill-dialog/skill-dialog.component';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  displayedColumns = ['id', 'name', 'actions'];
  dataSource: MatTableDataSource<Skill>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public skillService : SkillService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData(){
    this.skillService.getAllSkill().subscribe(data => {
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

  
  public openDialog(flag: number, id: number, name: string) {
    const dialogRef = this.dialog.open(SkillDialogComponent, { data: { id: id, name: name} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1)
        this.loadData();
    });
  }

  

}
