import { Injectable } from '@angular/core';
import { Patient } from './patient';

@Injectable()
export class PatientsService {
  private PATIENTS: Patient[] = [
      {mrn: '1234', firstName: 'Ronnie', lastName: 'Mathew'},
      {mrn: '4567', firstName: 'William', lastName: 'Yu'},
      {mrn: '8901', firstName: 'Andrey', lastName: 'Yermolov'},
      {mrn: '2345', firstName: 'Tom', lastName: 'Wyckoff'}
  ];

  patients: Patient[];

  constructor() {
  }

  getPatients(): Patient[] {
    return this.PATIENTS;
  }
}
