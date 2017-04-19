import { TestBed, inject } from '@angular/core/testing';

import { PatientElgsService } from './get-patient-elgs.service';

describe('PatientElgsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientElgsService]
    });
  });

  it('should ...', inject([PatientElgsService], (service: PatientElgsService) => {
    expect(service).toBeTruthy();
  }));
});
