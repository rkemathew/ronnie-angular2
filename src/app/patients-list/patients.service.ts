import { Injectable } from '@angular/core';
import { Patient } from './patient';

@Injectable()
export class PatientsService {
  private PATIENTS: Patient[] = [
      {mrn: '1234', firstName: 'Ronnie', lastName: 'Mathew'},
      {mrn: '1234', firstName: 'Ronnie', lastName: 'Mathew'}
  ];

  patients: Patient[];

  constructor() {
  }

  getPatients(): Patient[] {
    return this.PATIENTS;
  }
}
