import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityVerifyComponent } from './eligibility-verify.component';

describe('EligibilityVerifyComponent', () => {
  let component: EligibilityVerifyComponent;
  let fixture: ComponentFixture<EligibilityVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibilityVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
