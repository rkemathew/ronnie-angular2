import { TestBed, inject } from '@angular/core/testing';

import { PatientEligFailDetailsService } from './get-patient-elig-fail-details.service';

describe('PatientEligFailDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientEligFailDetailsService]
    });
  });

  it('should ...', inject([PatientEligFailDetailsService], (service: PatientEligFailDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
