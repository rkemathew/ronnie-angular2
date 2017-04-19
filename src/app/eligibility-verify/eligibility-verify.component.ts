import { Component, OnInit } from '@angular/core';
import { PatientElgsService } from './../_services/get-patient-elgs.service';
import { PatientInsRoot } from './../_services/patient-ins-info';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-eligibility-verify',
  templateUrl: './eligibility-verify.component.html',
  styleUrls: ['./eligibility-verify.component.css'],
  providers: [ PatientElgsService ]
})
export class EligibilityVerifyComponent implements OnInit {

  public selectedPatient: PatientInsRoot;
  patientElgs: Observable<PatientInsRoot[]>;
  constructor(private patientElgsService: PatientElgsService) { }

  ngOnInit() {
     this.patientElgs = this.patientElgsService.getPatientElgs();
     console.log('after Service = ', JSON.stringify(this.patientElgs));
  }

    onSelect(patientElg: PatientInsRoot): void {
    this.selectedPatient = patientElg;
  }
}
