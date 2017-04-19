import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligFailureReasonComponent } from './elig-failure-reason.component';

describe('EligFailureReasonComponent', () => {
  let component: EligFailureReasonComponent;
  let fixture: ComponentFixture<EligFailureReasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligFailureReasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligFailureReasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
