import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ResponseCandidateSkill } from 'src/app/models/responseCandidateSkill';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CandidateSearchService } from 'src/app/services/candidate-search.service';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-candidate-search',
  templateUrl: './candidate-search.component.html',
  styleUrls: ['./candidate-search.component.css']
})
export class CandidateSearchComponent implements OnInit {

  
  displayedColumns = ['id', 'candidate', 'email', 'phone', 'dateOfBirth'];
  dataSource: MatTableDataSource<ResponseCandidateSkill>;

  @Input() selectedSkill: Skill[];
  @Input() byAll: boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public candidateSearchService : CandidateSearchService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.selectedSkill) {
      this.loadData();
    }
  }

  

  public loadData(){
    this.dataSource = new MatTableDataSource(null);
    let list: number[] =[];
    this.selectedSkill.forEach(s => {
      //console.log("Selected skill id : " + s.id);
      list.push(s.id);
    });
    
    this.candidateSearchService.getCandidatesBySomeSkills(this.byAll, list).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }  

  public onClick(byAll: boolean, list: number[]){
    this.candidateSearchService.getCandidatesBySomeSkills(true, list).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
