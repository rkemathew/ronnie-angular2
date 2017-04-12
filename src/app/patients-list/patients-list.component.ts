import {Component, Input, OnInit} from '@angular/core';
import { PatientsService } from './patients.service';
import { Patient } from './patient';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
  providers: [ PatientsService ]
})
export class PatientsListComponent implements OnInit {
  @Input() patients: Patient[];

  constructor(private _patientService: PatientsService) { }

  ngOnInit() {
    this.patients = this._patientService.getPatients();
  }

}
