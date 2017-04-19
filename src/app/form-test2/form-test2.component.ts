import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.interface';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Component({
  selector: 'app-form-test2',
  templateUrl: './form-test2.component.html',
  styleUrls: ['./form-test2.component.css']
})
export class FormTest2Component implements OnInit {
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }

  ngOnInit() {
         // the long way
        // this.myForm = new FormGroup({
        //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
        //     address: new FormGroup({
        //         address1: new FormControl('', <any>Validators.required),
        //         postcode: new FormControl('8000')
        //     })
        // });

        // the short way
        this.myForm = this._fb.group({
            name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
            address: this._fb.group({
                street: ['', <any>Validators.required],
                postcode: ['8000']
            })
        });

        // subscribe to form changes
        this.subcribeToFormChanges();

        // Update single value
        (<FormControl>this.myForm.controls['name'])
            .setValue('John', { onlySelf: true });

        // Update form model
        // const people = {
        // 	name: 'Jane',
        // 	address: {
        // 		street: 'High street',
        // 		postcode: '94043'
        // 	}
        // };

        // (<FormGroup>this.myForm)
        //     .setValue(people, { onlySelf: true });
 }
    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;
        // const myFormValueChanges2$ = this.myForm.statusChanges;

        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$
                           .map((value) => {
           value.User.name = value.User.name.toUpperCase();
              return value;
         })
                  .subscribe(x => {
                      this.events.push({ event: 'VALUE_CHANGED', object: x });
                       // this.myForm.setValue({'name': 'test'});
                  });

      //   myFormValueChanges2$
      //     .subscribe(data => {
      //       // console.log('Form changes', data)
      //       this.myForm.setValue({name: 'test'});
      // });

    }
    save(model: User, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }
}
