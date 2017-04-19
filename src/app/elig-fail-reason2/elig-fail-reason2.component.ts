import { Component, OnInit } from '@angular/core';
import { PatientEligFailService } from './../_services/patient-elig-fail.service';
import { IEligFailDetail } from './../_services/elig-fail-detail';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-elig-fail-reason2',
  templateUrl: './elig-fail-reason2.component.html',
  styleUrls: ['./elig-fail-reason2.component.css'],
  providers: [ PatientEligFailService ]
})
export class EligFailReason2Component implements OnInit {

  patientFailElgs: Observable<IEligFailDetail[]>;
  constructor(private patientEligFailService: PatientEligFailService) { }

  ngOnInit() {
    this.patientFailElgs = this.patientEligFailService.getPatientElgFails();
    console.log('after Service (EligFailReason2Component) = ', JSON.stringify(this.patientFailElgs));
  }

}
