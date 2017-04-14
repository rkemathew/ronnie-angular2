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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientsListComponent,
    ProvidersListComponent,
    FormTestComponent
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
