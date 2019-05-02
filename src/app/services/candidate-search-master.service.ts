import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateSearchMasterService {

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
}
