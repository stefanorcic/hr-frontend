import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-candidate-search-master',
  templateUrl: './candidate-search-master.component.html',
  styleUrls: ['./candidate-search-master.component.css']
})
export class CandidateSearchMasterComponent implements OnInit {

  skills: Skill[];
  displayedColumns = ['byAll','skill', 'actions'];
  dataSource: MatTableDataSource<Skill>;
  byAll: boolean = true;
  selectedSkill: Skill[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(public skillService : SkillService) { }

  ngOnInit() {
    this.skillService.getAllSkill().subscribe(skills =>
      this.skills = skills
    );
  }

  public selectSkill(skill) {
    
    this.selectedSkill = skill;
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

}
