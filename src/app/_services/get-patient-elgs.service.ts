import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PatientInsRoot } from './patient-ins-info';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class PatientElgsService {
/*

*/
    // patientsElgFailServiceUrl = 'http://localhost:3000/eligFail';
  // patientsElgServiceUrl = 'http://localhost:3000/elgInfo';
  patientsElgServiceUrl = 'http://localhost:3000/elgInfo';
  constructor(
    private http: Http
  ) {}

  getPatientElgs(): Observable<PatientInsRoot[]> {
    return this.http
      .get(this.patientsElgServiceUrl)
      .map(response => response.json() as PatientInsRoot[]);
  }
}
