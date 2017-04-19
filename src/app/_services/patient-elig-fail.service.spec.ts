import { TestBed, inject } from '@angular/core/testing';

import { PatientEligFailService } from './patient-elig-fail.service';

describe('PatientEligFailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientEligFailService]
    });
  });

  it('should ...', inject([PatientEligFailService], (service: PatientEligFailService) => {
    expect(service).toBeTruthy();
  }));
});
