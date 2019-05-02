import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Skill } from '../models/skill';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Candidate } from '../models/candidate';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private readonly API_URL = 'http://localhost:8083/skill/';

  dataChange: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllSkill(): Observable<Skill[]> {
    this.httpClient.get<Skill[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },

        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
    return this.dataChange.asObservable();
  }

  public addSkill(skill: Skill): void {
    this.httpClient.post(this.API_URL, skill).subscribe();
  }

  public updateSkill(skill: Skill): void {
      this.httpClient.put(this.API_URL, skill).subscribe();
  }

  public deleteSkill(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
