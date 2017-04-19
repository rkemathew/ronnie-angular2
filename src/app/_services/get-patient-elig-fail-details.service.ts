import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEligFailDetail } from './elig-fail-detail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class PatientEligFailDetailsService {
/*

*/

  patientsElgFailServiceUrl = 'http://localhost:3000/eligFail';
  // patientsElgFailServiceUrl = 'http://localhost:3000/elgInfo';
  constructor(
    private http: Http
  ) {}

    getPatientFailElgs(): Observable<IEligFailDetail[]> {
    return this.http
      .get(this.patientsElgFailServiceUrl)
      .map(response => response.json() as IEligFailDetail[]);
  }
}
