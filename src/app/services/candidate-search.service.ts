import { Injectable } from '@angular/core';
import { ResponseCandidateSkill } from '../models/responseCandidateSkill';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Skill } from '../models/skill';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CandidateSearchService {

  //candidateSkillService: CandidateSkillService;
  //skills: Skill[];

  
 private readonly API_URL_SEARCH = 'http://localhost:8083/candidate-skill/candidate/search';
 

dataChange: BehaviorSubject<ResponseCandidateSkill[]> = new BehaviorSubject<ResponseCandidateSkill[]>([]);

 constructor(private httpClient: HttpClient) { }

public getCandidatesBySomeSkills(byAll: boolean, skillIds: number[]): Observable<ResponseCandidateSkill[]> {
  //const body = new Http
  //const  headers = new  HttpHeaders().set('Content-Type', "application/json");
  const  params = new HttpParams().set('byAll', byAll.toString()).set('skillIds', skillIds.toString());
  this.httpClient.get<ResponseCandidateSkill[]>(this.API_URL_SEARCH, {params : params}).subscribe(data => {
    this.dataChange.next(data);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
  return this.dataChange.asObservable();
}

}
