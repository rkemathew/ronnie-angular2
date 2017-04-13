import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Patient } from './patient';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class PatientsService {
/*
  private PATIENTS: Patient[] = [
      {mrn: '1234', firstName: 'Ronnie', lastName: 'Mathew'},
      {mrn: '4567', firstName: 'William', lastName: 'Yu'},
      {mrn: '8901', firstName: 'Andrey', lastName: 'Yermolov'},
      {mrn: '2345', firstName: 'Tom', lastName: 'Wyckoff'}
  ];
*/

  patientsServiceUrl = 'http://localhost:3000/data';
  constructor(
    private http: Http
  ) {}

  getPatients(): Observable<Patient[]> {
    return this.http
      .get(this.patientsServiceUrl)
      .map(response => response.json() as Patient[]);
  }
}
