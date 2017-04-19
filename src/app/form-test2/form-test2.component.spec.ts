import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTest2Component } from './form-test2.component';

describe('FormTest2Component', () => {
  let component: FormTest2Component;
  let fixture: ComponentFixture<FormTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
