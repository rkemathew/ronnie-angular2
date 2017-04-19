import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligFailReason2Component } from './elig-fail-reason2.component';

describe('EligFailReason2Component', () => {
  let component: EligFailReason2Component;
  let fixture: ComponentFixture<EligFailReason2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligFailReason2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligFailReason2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
