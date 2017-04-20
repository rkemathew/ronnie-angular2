import { Component, OnInit } from '@angular/core';
import { IEligFailDetail } from './../_services/elig-fail-detail';
import { PatientEligFailService } from './../_services/patient-elig-fail.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-elig-failure-reason',
  templateUrl: './elig-failure-reason.component.html',
  styleUrls: ['./elig-failure-reason.component.css'],
  providers: [ PatientEligFailService ]
})
export class EligFailureReasonComponent implements OnInit {

  patientFailElgs: Observable<IEligFailDetail>;
    // compareEligs:  CmpData[];
  constructor(private patientEligFailService: PatientEligFailService) { }

  ngOnInit() {
      this.patientFailElgs = this.patientEligFailService.getPatientElgFails();
      // this.compareEligs = this.patientFailElgs.
      console.log('after Fail Service = ', JSON.stringify(this.patientFailElgs));
  }

}
