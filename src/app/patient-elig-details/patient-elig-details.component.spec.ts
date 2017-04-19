import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEligDetailsComponent } from './patient-elig-details.component';

describe('PatientEligDetailsComponent', () => {
  let component: PatientEligDetailsComponent;
  let fixture: ComponentFixture<PatientEligDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientEligDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEligDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
