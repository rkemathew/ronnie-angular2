import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { ProvidersListComponent } from './providers-list/providers-list.component';
import { FormTestComponent } from './form-test/form-test.component';
import { FormTest2Component } from './form-test2/form-test2.component';
import { EligibilityVerifyComponent } from './eligibility-verify/eligibility-verify.component';
import { PatientEligDetailsComponent } from './patient-elig-details/patient-elig-details.component';
import { EligFailureReasonComponent } from './elig-failure-reason/elig-failure-reason.component';
import { EligFailReason2Component } from './elig-fail-reason2/elig-fail-reason2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientsListComponent,
    ProvidersListComponent,
    FormTestComponent,
    FormTest2Component,
    EligibilityVerifyComponent,
    PatientEligDetailsComponent,
    EligFailureReasonComponent,
    EligFailReason2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'patients', component: PatientsListComponent },
      { path: 'providers', component: ProvidersListComponent },
      { path: 'login', component: FormTestComponent },
      { path: 'addUser', component: FormTest2Component },
      { path: 'eligibility', component: EligibilityVerifyComponent },
      { path: 'eligFailDetail', component: EligFailureReasonComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
