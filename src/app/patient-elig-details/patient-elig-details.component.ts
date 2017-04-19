import { Component, OnInit, Input } from '@angular/core';
import { PatientInsRoot } from './../_services/patient-ins-info';
import {Observable} from 'rxjs/Observable';

@Component({
  // selector: 'app-patient-elig-details',
  selector: 'app-elig-detail',
  templateUrl: './patient-elig-details.component.html',
  styleUrls: ['./patient-elig-details.component.css']
})
export class PatientEligDetailsComponent implements OnInit {
  // @Input() patientDetails: PatientInsRoot;
  @Input() patientDetails: Observable<PatientInsRoot>;
  // patientBenefits: Observable<PatientInsRoot>;
  constructor() { }

  ngOnInit() {
    // this.patientBenefits = this.patientDetails;
              console.log('got here - ', JSON.stringify(this.patientDetails));
  }

}
