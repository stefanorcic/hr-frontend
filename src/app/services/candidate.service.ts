import { Injectable } from '@angular/core';
import { Candidate } from '../models/candidate';
import { BehaviorSubject, Observable } from "rxjs";

import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private readonly API_URL = 'http://localhost:8083/candidate/';

  dataChange: BehaviorSubject<Candidate[]> = new BehaviorSubject<Candidate[]>([]);

  constructor(private httpClient: HttpClient) { }

  public getAllCandidate(): Observable<Candidate[]> {
    this.httpClient.get<Candidate[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },

        (error: HttpErrorResponse) => {
            console.log(error.name + ' ' + error.message);
        });
    return this.dataChange.asObservable();
  }

  public addCandidate(candidate: Candidate): void {
    this.httpClient.post(this.API_URL, candidate).subscribe();
  }

  public updateCandidate(candidate: Candidate): void {
      this.httpClient.put(this.API_URL, candidate).subscribe();
  }

  public deleteCandidate(id: number): void {
      this.httpClient.delete(this.API_URL + id).subscribe();
  }
}
