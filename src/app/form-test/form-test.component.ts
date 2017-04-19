import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.css']
})
export class FormTestComponent implements OnInit {
  public loginForm: FormGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  constructor(public fb: FormBuilder) {}
  doLogin(event) {
    console.log(event);
    console.log(this.loginForm.value);
  }
  ngOnInit() {
   this.loginForm.valueChanges
        .map((value) => {
            value.email = value.email.toUpperCase();
            // this.loginForm.controls.email.setValue('12345');
            // return value;
        })
        // .filter((value) => this.loginForm.valid)
        .subscribe((value) => {
           console.log('Model Driven Form valid value: vm = ', JSON.stringify(value));
           // this.loginForm.controls.email.setValue('12345');
        });

    /*
    ngOnInit():any {
  this.userData = this._dataService.getAllData()
    .subscribe(
      data => {
        this.userData = data;
        this.userForm.controls.username.updateValue(
                this.userData.username);
      }
    );

  this.userForm = this._formBuilder.group({
    'username': [this.userData.username, Validators.compose([
        this.usernameValid
    ])];
}
    */
  }
}
