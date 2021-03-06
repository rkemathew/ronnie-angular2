import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IEligFailDetail } from './elig-fail-detail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
/*
  Service call Eligibility Fail
*/

@Injectable()
export class PatientEligFailService {

  patientsElgServiceUrl = 'http://localhost:3000/eligFail';

  constructor(private http: Http) { }

  getPatientElgFails(): Observable<IEligFailDetail> {
// getPatientElgFails(): Promise<IEligFailDetail> {
    return this.http
      .get(this.patientsElgServiceUrl)
      .map(response => response.json() as IEligFailDetail);
//      .catch(this.handleError);
  }

    public handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
