import { Injectable } from '@angular/core';
import { CandidateSkill } from '../models/candidateSkill';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateSkillService {

  candidateSkillService: CandidateSkillService;
 private readonly API_URL = 'http://localhost:8083/candidate-skill/';
 private readonly API_URL_BYID = 'http://localhost:8083/candidate-skill/candidate/';
 

dataChange: BehaviorSubject<CandidateSkill[]> = new BehaviorSubject<CandidateSkill[]>([]);

 constructor(private httpClient: HttpClient) { }

 public getCandidateSkill(): Observable<CandidateSkill[]> {
  this.httpClient.get<CandidateSkill[]>(this.API_URL).subscribe(data => {
    this.dataChange.next(data);
  },
    (error: HttpErrorResponse) => {
      console.log(error.name + ' ' + error.message);
    });
  return this.dataChange.asObservable();
}

 public getCandidateSkillById(CandidateId): Observable<CandidateSkill[]> {
   this.httpClient.get<CandidateSkill[]>(this.API_URL_BYID + CandidateId).subscribe(data => {
     this.dataChange.next(data);
   },
     (error: HttpErrorResponse) => {
       console.log(error.name + ' ' + error.message);
     });
   return this.dataChange.asObservable();
 }

 public addCandidateSkill(candidateSkill: CandidateSkill): void {
   this.httpClient.post(this.API_URL, candidateSkill).subscribe();
 }

 public updateCandidateSkill(candidateSkill: CandidateSkill): void {
   this.httpClient.put(this.API_URL, candidateSkill).subscribe();
 }

 public deleteCandidateSkill(id: number): void {
   this.httpClient.delete(this.API_URL + id).subscribe();
 }
}
