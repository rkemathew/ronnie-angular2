import {Component, OnInit} from '@angular/core';
import { PatientsService } from './patients.service';
import { Patient } from './patient';
import {Observable} from 'rxjs/Observable';

// http://learnangular2.com/forms/

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
  providers: [ PatientsService ]
})
export class PatientsListComponent implements OnInit {
  patients: Observable<Patient[]>;

  constructor(private _patientsService: PatientsService) { }

  ngOnInit() {
    this.patients = this._patientsService.getPatients();
  }
}
